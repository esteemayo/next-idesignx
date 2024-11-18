'use  client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Modal from './Modal';

import DesignImages from '../design/DesignImages';
import DesignInfo from '../design/DesignInfo';
import DesignDescription from '../design/DesignDescription';

import { useDesignModal } from '@/hooks/useDesignModal';
import { validateDesignInputs } from '@/validations/design';

import { selectInputs } from '@/data/formData';
import { DesignData, DesignErrors } from '@/types';

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

  const [files, setFiles] = useState<IFile[]>([]);
  const [step, setStep] = useState(STEPS.INFO);
  const [errors, setErrors] = useState<DesignErrors>({});
  const [data, setData] = useState(initialState);

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

  useEffect(() => {
    if (Object.values(errors).length > 0) {
      setTimeout(() => setErrors({}), 5000);
    }
  }, [errors]);

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
      <DesignDescription
        phone={data.phone}
        subject={data.subject}
        desc={data.desc}
        errors={errors}
        onChange={handleChange}
      />
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <DesignImages
        category={data.category}
        files={files}
        options={selectInputs}
        error={errors.category}
        onChange={handleChange}
        onChangeFiles={handleFiles}
      />
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
