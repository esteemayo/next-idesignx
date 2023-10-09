'use client';

import { useCallback, useState } from 'react';

import Modal from './Modal';
import { useRegisterModal } from '@/hooks/useRegisterModal';

const initialState = {
  name: '',
  email: '',
  username: '',
  password: '',
  passwordConfirm: '',
};

const RegisterModal = () => {
  const isOpen = useRegisterModal((state) => state.isOpen);
  const onClose = useRegisterModal((state) => state.onClose);

  const [data, setData] = useState(initialState);

  const handleSubmit = useCallback(() => {}, []);

  return (
    <Modal
      isOpen={isOpen}
      title='Register'
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterModal;
