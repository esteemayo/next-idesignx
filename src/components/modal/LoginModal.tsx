'use client';

import { ChangeEventHandler, useCallback, useState } from 'react';

import Heading from '../Heading';
import Modal from './Modal';
import Input from '../inputs/Input';

import { useLoginModal } from '@/hooks/useLoginModal';

const initialState = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const isOpen = useLoginModal((state) => state.isOpen);
  const onClose = useLoginModal((state) => state.onClose);

  const [data, setData] = useState(initialState);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: input }) => {
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

  const bodyContent = (
    <>
      <Heading title='Welcome back' subtitle='Log into your account' />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={data.email}
        placeholder='Email address'
        onChange={handleChange}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        value={data.password}
        placeholder='********'
        onChange={handleChange}
      />
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Login'
      actionLabel='Login'
      onClose={onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
    />
  );
};

export default LoginModal;
