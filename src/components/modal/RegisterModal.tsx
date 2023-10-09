'use client';

import { useCallback } from 'react';

import Modal from './Modal';
import { useRegisterModal } from '@/hooks/useRegisterModal';

const RegisterModal = () => {
  const isOpen = useRegisterModal((state) => state.isOpen);
  const onClose = useRegisterModal((state) => state.onClose);

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
