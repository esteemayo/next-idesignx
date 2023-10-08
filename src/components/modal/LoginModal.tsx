'use client';

import { useLoginModal } from '@/hooks/useLoginModal';
import Modal from './Modal';

const LoginModal = () => {
  const isOpen = useLoginModal((state) => state.isOpen);
  const onClose = useLoginModal((state) => state.onClose);

  return <Modal isOpen={isOpen} onClose={onClose} />;
};

export default LoginModal;
