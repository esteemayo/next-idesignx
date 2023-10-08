'use client';

import { useForm } from '@/hooks/useForm';
import { useLoginModal } from '@/hooks/useLoginModal';

import Modal from './Modal';
import Input from '../inputs/Input';

const initialState = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const isOpen = useLoginModal((state) => state.isOpen);
  const onClose = useLoginModal((state) => state.onClose);

  const onSubmitHandler = () => {};

  const { data, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState
  );

  const bodyContent = (
    <>
      <Input
        name='name'
        label='Email address'
        value={data.email}
        placeholder='Email address'
        onChange={handleChange}
      />
      <Input
        name='name'
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
