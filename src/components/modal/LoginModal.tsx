'use client';

import styled from 'styled-components';

import Modal from './Modal';
import ToggleAccount from '../ToggleAccount';
import Heading from '../Heading';
import LoginOptions from '../LoginOptions';

import { Line } from '../Line';
import Input from '../inputs/Input';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useForm } from '@/hooks/useForm';
import { useRegisterModal } from '@/hooks/useRegisterModal';

interface IData {
  email: string;
  password: string;
}

interface IErrors {
  email?: string;
  password?: string;
}

const initialState: IData = {
  email: '',
  password: '',
};

const initialError: IErrors = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const isOpen = useLoginModal((state) => state.isOpen);
  const onOpen = useRegisterModal((state) => state.onOpen);
  const onClose = useLoginModal((state) => state.onClose);

  const handleToggle = () => {
    onClose();
    setErrors({});
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setErrors({});
  };

  const validateInputs = (data: IData) => {
    let errors: IErrors = {};
    const { email, password } = data;

    if (email.trim() === '') {
      errors.email = 'Email must not be empty';
    } else {
      const regEx =
        /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
      }
    }

    if (password === '') {
      errors.password = 'Password must not be empty';
    } else if (password.length < 8) {
      errors.password = 'Password should be at least 8 characters long';
    }

    return errors;
  };

  const onSubmitHandler = () => {
    console.log({ ...data });
  };

  const { data, errors, setErrors, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState,
    initialError,
    validateInputs
  );

  const bodyContent = (
    <>
      <Heading title='Welcome back' subtitle='Log into your account!' />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={data.email}
        placeholder='Email address'
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        value={data.password}
        placeholder='Password'
        onChange={handleChange}
        error={errors.password}
      />
    </>
  );

  const footerContent = (
    <>
      <Line />
      <LoginOptions />
      <ToggleAccount
        title='First time using iDesignx?'
        label='Create an account'
        onClick={handleToggle}
      />
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Login'
      actionLabel='Log in'
      onClose={handleClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

const Container = styled.div``;

export default LoginModal;
