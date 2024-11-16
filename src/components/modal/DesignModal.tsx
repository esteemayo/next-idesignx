'use  client';

import { useCallback, useMemo, useState } from 'react';

import TextArea from '../inputs/TextArea';
import Input from '../inputs/Input';
import ImageUpload from '../inputs/ImageUpload';
import Select from '../inputs/Select';

import Modal from './Modal';
import Heading from '../Heading';

import { useDesignModal } from '@/hooks/useDesignModal';
import { validateDesignInputs } from '@/validations/design';

import { selectInputs } from '@/data/formData';
import { DesignData, DesignErrors } from '@/types';
import DesignInfo from '../design/DesignInfo';

interface IFile {
  id?: number;
  lastModified: number;
  lastModifiedDate?: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

enum STEPS {
  INFO = 0,
  DESC = 1,
  IMAGES = 2,
}

const initialState: DesignData = {
  name: '',
  email: '',
  address: '',
  phone: '',
  subject: '',
  desc: '',
  category: '',
};

const DesignModal = () => {
  const isOpen = useDesignModal((state) => state.isOpen);
  const onClose = useDesignModal((state) => state.onClose);

  const [step, setStep] = useState(STEPS.INFO);
  const [files, setFiles] = useState<IFile[]>([]);
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState<DesignErrors>({});

  const handleChange = useCallback(
    ({
      target: input,
    }: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleFiles = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files!;

    for (let i = 0; i < files.length; i++) {
      const newFile: IFile = files[i];
      newFile['id'] = Math.random();
      setFiles((prev) => {
        return [...prev, newFile];
      });
    }
  }, []);

  const handlePrev = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const handleNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    setErrors({});
  }, [onClose]);

  const handleClear = useCallback(() => {
    setData(initialState);
    setFiles([]);
  }, []);

  const handleSubmit = useCallback(() => {
    if (step !== STEPS.IMAGES) {
      return handleNext();
    }

    const errors = validateDesignInputs(data);
    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    setErrors({});

    console.log({ ...data, files });
    handleClear();
    setStep(STEPS.INFO);
    onClose();
  }, [data, files, handleClear, handleNext, onClose, step]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.IMAGES) {
      return 'Submit';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return undefined;
    }

    return 'Prev';
  }, [step]);

  const handleSecondaryAction = useMemo(() => {
    return step === STEPS.INFO ? undefined : handlePrev;
  }, [handlePrev, step]);

  const btnSize = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'true';
    }
  }, [step]);

  let bodyContent: JSX.Element;

  bodyContent = (
    <DesignInfo
      name={data.name}
      email={data.email}
      address={data.address}
      errors={errors}
      onChange={handleChange}
    />
  );

  if (step === STEPS.DESC) {
    bodyContent = (
      <>
        <Heading
          title='Describe your design ideas'
          subtitle='What inspired the design(s)?'
        />
        <Input
          type='tel'
          name='phone'
          label='Phone'
          value={data.phone}
          placeholder='Phone'
          onChange={handleChange}
          error={errors.phone}
        />
        <Input
          name='subject'
          label='Subject'
          value={data.subject}
          placeholder='Subject'
          onChange={handleChange}
          error={errors.subject}
        />
        <TextArea
          name='desc'
          value={data.desc}
          label='Description'
          placeholder='Description'
          onChange={handleChange}
          error={errors.desc}
        />
      </>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <>
        <Heading
          title='Upload your design images'
          subtitle='Show us what your designs looks like!'
        />
        <Select
          name='category'
          value={data.category}
          label='Select a category'
          options={selectInputs}
          onChange={handleChange}
          error={errors.category}
        />
        <ImageUpload value={files} onChange={handleFiles} />
      </>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      title='Upload your designs'
      size={btnSize}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      body={bodyContent}
      onClose={handleClose}
      onSubmit={handleSubmit}
      secondaryAction={handleSecondaryAction}
    />
  );
};

export default DesignModal;
