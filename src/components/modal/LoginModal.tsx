'use client';

import styled from 'styled-components';
import { ChangeEventHandler, useCallback, useState } from 'react';

import Modal from './Modal';
import ToggleAccount from '../ToggleAccount';
import Heading from '../Heading';
import LoginOptions from '../LoginOptions';

import { Line } from '../Line';
import Input from '../inputs/Input';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useRegisterModal } from '@/hooks/useRegisterModal';

interface IErrors {
  email?: string;
  password?: string;
}

const initialState = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const isOpen = useLoginModal((state) => state.isOpen);
  const registerModal = useRegisterModal();
  const onClose = useLoginModal((state) => state.onClose);

  const [data, setData] = useState(initialState);
  const [file, setFile] = useState('');
  const [errors, setErrors] = useState<IErrors>({});

  const handleToggle = useCallback(() => {
    onClose();
    registerModal.onOpen();
  }, [onClose, registerModal]);

  const handleClose = useCallback(() => {
    onClose();
    setErrors({});
  }, [onClose]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: input }) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const validateInputs = useCallback(() => {
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
  }, [data]);

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(() => {
    const errors = validateInputs();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setErrors({});

    console.log({ ...data });
    handleClear();
  }, [data, handleClear, validateInputs]);

  const bodyContent = (
    <Container>
      <Heading title='Welcome back' subtitle='Log into your account!' />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={data.email}
        placeholder='you@user.com'
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        value={data.password}
        placeholder='********'
        onChange={handleChange}
        error={errors.password}
      />
    </Container>
  );

  const footerContent = (
    <Container>
      <Line />
      <LoginOptions />
      <ToggleAccount
        title='First time using iDesignx?'
        label='Create an account'
        onClick={handleToggle}
      />
    </Container>
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
