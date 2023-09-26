'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = useCallback(() => {
    setShowModal(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return <Container>Modal</Container>;
};

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.7);
  z-index: 5000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Modal;
