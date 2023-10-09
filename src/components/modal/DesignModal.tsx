'use  client';

import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import Input from '../inputs/Input';
import ImageUpload from '../inputs/ImageUpload';
import Select from '../inputs/Select';
import TextArea from '../inputs/TextArea';

import Modal from './Modal';
import Heading from '../Heading';

import { selectInputs } from '@/formData';
import { useDesignModal } from '@/hooks/useDesignModal';

interface IErrors {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  subject?: string;
  desc?: string;
  category?: string;
}

enum STEPS {
  INFO = 0,
  DESC = 1,
  IMAGES = 2,
}

const initialState = {
  name: '',
  email: '',
  address: '',
  phone: '',
  subject: '',
  desc: '',
  category: '',
};

const DesignModal = () => {
  const { isOpen, onClose } = useDesignModal();

  const [step, setStep] = useState(STEPS.INFO);
  const [files, setFiles] = useState(null);
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState<IErrors>({});

  const handleChange = useCallback(
    ({ target: input }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const validateInputs = useCallback(() => {
    let errors: IErrors = {};
    const { name, email, address, phone, subject, desc, category } = data;

    if (name.trim() === '') {
      errors.name = 'true';
    }

    if (email.trim() === '') {
      errors.email = 'true';
    }

    if (address.trim() === '') {
      errors.address = 'true';
    }

    if (phone.trim() === '') {
      errors.phone = 'true';
    }

    if (subject.trim() === '') {
      errors.subject = 'true';
    }

    if (desc.trim() === '') {
      errors.desc = 'true';
    }

    if (category.trim() === '') {
      errors.category = 'true';
    }

    return errors;
  }, [data]);

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
    setFiles(null);
  }, []);

  const handleSubmit = useCallback(() => {
    if (step !== STEPS.IMAGES) {
      return handleNext();
    }

    const errors = validateInputs();
    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    setErrors({});

    console.log({ ...data, files });
    handleClear();
    setStep(STEPS.INFO);
    onClose();
  }, [data, files, handleClear, handleNext, onClose, step, validateInputs]);

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

    return 'Back';
  }, [step]);

  const handleSecondaryAction = useMemo(() => {
    return step === STEPS.INFO ? undefined : handlePrev;
  }, [handlePrev, step]);

  const btnSize = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'true';
    }
  }, [step]);

  let bodyContent;

  bodyContent = (
    <>
      <Heading
        title='Share some basics info about you'
        subtitle='Tell us about you'
      />
      <Input
        name='name'
        label='Your name'
        value={data.name}
        placeholder='Your name'
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        name='email'
        type='email'
        label='Your email'
        value={data.email}
        placeholder='Your email'
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        name='address'
        label='Your address'
        value={data.address}
        placeholder='Your address'
        onChange={handleChange}
        error={errors.address}
      />
    </>
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
        <ImageUpload files={files} onChange={(value) => setFiles(value)} />
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
