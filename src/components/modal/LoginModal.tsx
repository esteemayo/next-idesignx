'use client';

import LoginOptions from '../LoginOptions';
import Modal from './Modal';
import ToggleAccount from '../ToggleAccount';
import Heading from '../Heading';

import { Line } from '../Line';
import Input from '../inputs/Input';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useForm } from '@/hooks/useForm';
import { useRegisterModal } from '@/hooks/useRegisterModal';

import { LoginData, LoginErrors } from '@/types';
import { validateLoginInputs } from '@/validations/login';

const initialState: LoginData = {
  email: '',
  password: '',
};

const initialError: LoginErrors = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const onClose = useLoginModal((state) => state.onClose);
  const isOpen = useLoginModal((state) => state.isOpen);
  const onOpen = useRegisterModal((state) => state.onOpen);

  const handleToggle = () => {
    onClose();
    setErrors({});
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setErrors({});
  };

  const onSubmitHandler = () => {
    console.log({ ...data });
  };

  const { data, errors, setErrors, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState,
    initialError,
    validateLoginInputs
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

export default LoginModal;
