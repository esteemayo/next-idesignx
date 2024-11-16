'use client';

import LoginInfo from '../LoginInfo';
import Modal from './Modal';
import AuthFooter from '../authFooter/AuthFooter';

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
    <LoginInfo
      email={data.email}
      password={data.password}
      errors={errors}
      onChange={handleChange}
    />
  );

  const footerContent = (
    <AuthFooter
      title='First time using iDesignx?'
      label='Create an account'
      onToggle={handleToggle}
    />
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
