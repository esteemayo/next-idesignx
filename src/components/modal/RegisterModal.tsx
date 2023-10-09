'use client';

import styled from 'styled-components';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import LoginOptions from '../LoginOptions';
import Modal from './Modal';
import ToggleAccount from '../ToggleAccount';
import { Line } from '../Line';
import Heading from '../Heading';

import Input from '../inputs/Input';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useRegisterModal } from '@/hooks/useRegisterModal';

interface IErrors {
  name?: string;
  email?: string;
  username?: string;
  phone?: string;
  password?: string;
  passwordConfirm?: string;
}

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
  const loginModal = useLoginModal();
  const onClose = useRegisterModal((state) => state.onClose);

  const [step, setStep] = useState(STEPS.INFO);
  const [errors, setErrors] = useState<IErrors>({});
  const [data, setData] = useState(initialState);

  const handlePrev = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const handleNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const handleToggle = useCallback(() => {
    onClose();
    loginModal.onOpen();
  }, [loginModal, onClose]);

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
    if (step === STEPS.INFO) {
      return handleNext();
    }

    console.log({ ...data });
    handleClear();
    setStep(STEPS.INFO);
  }, [data, handleClear, handleNext, step]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.CREDENTIALS) {
      return 'Register';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step !== STEPS.INFO) {
      return 'Back';
    }

    return undefined;
  }, [step]);

  const handleSecondaryAction = useMemo(() => {
    return step !== STEPS.INFO ? handlePrev : undefined;
  }, [step, handlePrev]);

  const btnSize = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'true';
    }
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
    </Container>
  );

  if (step === STEPS.CREDENTIALS) {
    bodyContent = (
      <Container>
        <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
        <Input
          name='phone'
          type='tel'
          label='Phone number'
          value={data.phone}
          placeholder='Phone number'
          onChange={handleChange}
        />
        <Input
          name='password'
          type='password'
          label='Password'
          value={data.password}
          placeholder='Password'
          onChange={handleChange}
        />
        <Input
          name='passwordConfirm'
          type='password'
          label='Confirm password'
          value={data.passwordConfirm}
          placeholder='Password'
          onChange={handleChange}
        />
      </Container>
    );
  }

  const footerContent = (
    <Container>
      <Line />
      <LoginOptions />
      <ToggleAccount
        title='Already have an account?'
        label='Log in'
        onClick={handleToggle}
      />
    </Container>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Register'
      size={btnSize}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={handleSecondaryAction}
      onClose={onClose}
      body={bodyContent}
      footer={footerContent}
      onSubmit={handleSubmit}
    />
  );
};

const Container = styled.div``;

export default RegisterModal;
