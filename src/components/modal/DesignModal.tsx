'use  client';

import styled from 'styled-components';

import Modal from './Modal';
import { useDesignModal } from '@/hooks/useDesignModal';

const DesignModal = () => {
  const { isOpen, onClose, onOpen } = useDesignModal();

  return <Modal title='Upload your design' isOpen={isOpen} onClose={onClose} />;
};

const Container = styled.div``;

export default DesignModal;
