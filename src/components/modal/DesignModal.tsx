'use  client';

import styled from 'styled-components';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import Modal from './Modal';
import { useDesignModal } from '@/hooks/useDesignModal';
import { FormGroup } from '../form/FormGroup';
import Input from '../inputs/Input';
import TextArea from '../inputs/TextArea';

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
};

const DesignModal = () => {
  const { isOpen, onClose } = useDesignModal();

  const [step, setStep] = useState(STEPS.INFO);
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(
    ({ target: input }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handlePrev = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const handleNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const handleSubmit = useCallback(() => {
    if (step !== STEPS.IMAGES) {
      return handleNext();
    }
  }, [handleNext, step]);

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
      <FormGroup>
        <Input
          name='name'
          label='Your name'
          value={data.name}
          placeholder='Your name'
          onChange={handleChange}
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
    </Container>
  );

  if (step === STEPS.DESC) {
    bodyContent = (
      <Container>
        <FormGroup>
          <Input
            name='subject'
            label='Subject'
            value={data.subject}
            placeholder='subject'
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

  return (
    <Modal
      isOpen={isOpen}
      title='Upload your design'
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
