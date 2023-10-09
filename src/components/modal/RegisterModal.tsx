'use client';

import styled from 'styled-components';
import { ChangeEvent, useCallback, useState } from 'react';

import Modal from './Modal';
import Heading from '../Heading';

import Input from '../inputs/Input';
import { useRegisterModal } from '@/hooks/useRegisterModal';

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

  const [data, setData] = useState(initialState);

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
        placeholder='you@user.com'
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
      actionLabel='Register'
      onClose={onClose}
      body={bodyContent}
      onSubmit={handleSubmit}
    />
  );
};

const Container = styled.div``;

export default RegisterModal;
