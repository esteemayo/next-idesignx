'use client';

import { ChangeEventHandler, FormEvent, useCallback, useState } from 'react';

import Modal from './Modal';
import Input from '../inputs/Input';

import { useLoginModal } from '@/hooks/useLoginModal';

const initialState = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const { isOpen, onClose } = useLoginModal();
  const [data, setData] = useState(initialState);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: input }) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(() => {
    console.log({ ...data });
  }, [data]);

  const bodyContent = (
    <>
      <Input
        name='email'
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
