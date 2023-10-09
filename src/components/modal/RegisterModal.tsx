'use client';

import styled from 'styled-components';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import Modal from './Modal';
import Heading from '../Heading';

import Input from '../inputs/Input';
import { useRegisterModal } from '@/hooks/useRegisterModal';

enum STEPS {
  INFO = 0,
  CREDENTIALS = 1,
}

const initialState = {
  name: '',
  email: '',
  username: '',
  phone: '',
  password: '',
  passwordConfirm: '',
};

const RegisterModal = () => {
  const isOpen = useRegisterModal((state) => state.isOpen);
  const onClose = useRegisterModal((state) => state.onClose);

  const [step, setStep] = useState(STEPS.INFO);
  const [data, setData] = useState(initialState);

  const handlePrev = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const handleNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const handleChange = useCallback(
    ({ target: input }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log({ ...data });
    handleClear();
  }, [data, handleClear]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.CREDENTIALS) {
      return 'Register';
    }

    return 'Next';
  }, [step]);

  let bodyContent;

  bodyContent = (
    <Container>
      <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
      <Input
        name='name'
        label='Name'
        value={data.name}
        placeholder='Name'
        onChange={handleChange}
      />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={data.email}
        placeholder='Email address'
        onChange={handleChange}
      />
      <Input
        name='username'
        label='Username'
        value={data.username}
        placeholder='Username'
        onChange={handleChange}
      />
      <Input
        name='phone'
        type='tel'
        label='Phone number'
        value={data.phone}
        placeholder='Phone number'
        onChange={handleChange}
      />
    </Container>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Register'
      actionLabel={actionLabel}
      onClose={onClose}
      body={bodyContent}
      onSubmit={handleSubmit}
    />
  );
};

const Container = styled.div``;

export default RegisterModal;
