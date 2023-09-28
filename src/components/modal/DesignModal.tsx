'use  client';

import styled from 'styled-components';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import Input from '../inputs/Input';
import ImageUpload from '../inputs/ImageUpload';
import Select from '../inputs/Select';
import TextArea from '../inputs/TextArea';

import Modal from './Modal';
import Heading from '../Heading';

import { FormGroup } from '../form/FormGroup';

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
  const [errors, setErrors] = useState({});

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
      return 'Create';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return undefined;
    }

    return 'Back';
  }, [step]);

  let bodyContent;

  bodyContent = (
    <Container>
      <Heading
        title='Share some basics info about you'
        subtitle='Tell us about you'
      />
      <FormGroup>
        <Input
          name='name'
          label='Your name'
          value={data.name}
          placeholder='Your name'
          onChange={handleChange}
          error={errors.name}
        />
      </FormGroup>
      <FormGroup>
        <Input
          name='email'
          type='email'
          label='Your email'
          value={data.email}
          placeholder='Your email'
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          name='address'
          label='Your address'
          value={data.address}
          placeholder='Your address'
          onChange={handleChange}
        />
      </FormGroup>
    </Container>
  );

  if (step === STEPS.DESC) {
    bodyContent = (
      <Container>
        <Heading
          title='Describe your design ideas'
          subtitle='What inspired the design(s)?'
        />
        <FormGroup>
          <Input
            type='tel'
            name='phone'
            label='Phone'
            value={data.phone}
            placeholder='Phone'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name='subject'
            label='Subject'
            value={data.subject}
            placeholder='Subject'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            name='desc'
            value={data.desc}
            label='Description'
            placeholder='Description'
            onChange={handleChange}
          />
        </FormGroup>
      </Container>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <Container>
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
        />
        <ImageUpload files={files} onChange={(value) => setFiles(value)} />
      </Container>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      body={bodyContent}
      onClose={onClose}
      onSubmit={handleSubmit}
      secondaryAction={step === STEPS.INFO ? undefined : handlePrev}
    />
  );
};

const Container = styled.div``;

export default DesignModal;
