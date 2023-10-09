'use client';

import styled from 'styled-components';
import { ChangeEventHandler, useCallback, useState } from 'react';

import Modal from './Modal';
import ToggleAccount from '../ToggleAccount';
import Heading from '../Heading';

import Input from '../inputs/Input';
import Button from '../buttons/Button';

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

  const handleToggle = useCallback(() => {
    onClose();
  }, [onClose]);

  const bodyContent = (
    <Container>
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
    </Container>
  );

  const footerContent = (
    <>
      <Line />
      <Wrapper>
        <Button outline='true' type='button' label='Login with Google' />
        <Button outline='true' type='button' label='Login with Github' />
      </Wrapper>
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
      actionLabel='Login'
      onClose={onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

const Container = styled.div`
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Line = styled.span`
  width: 100%;
  height: 0.1px;
  background-color: #d7d5d5;
  margin-top: 2rem;
`;

const AccountContainer = styled.div`
  font-weight: 300;
  margin-top: 1.5rem;
`;

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const Text = styled.p``;

export default LoginModal;
