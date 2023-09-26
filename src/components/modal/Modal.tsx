'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onOpen, onClose }) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    setShowModal(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return <Container>Modal</Container>;
};

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.7);
  display: ${({ show }) => (show === 'true' ? 'block' : 'none')};
  opacity: ${({ show }) => (show === 'true' ? 1 : 0)};
  visibility: ${({ show }) => (show === 'true' ? 'visible' : 'hidden')};
  z-index: ${({ show }) => (show === 'true' ? 5000 : -1)};
`;

export default Modal;
