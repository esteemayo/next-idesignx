'use client';

import styled from 'styled-components';
import React, { useCallback, useEffect, useState } from 'react';

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  actionLabel: string;
  secondaryActionLabel?: string;
  disabled?: boolean;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onOpen(): void;
  onClose(): void;
  onSubmit(): void;
  secondaryAction(): void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  actionLabel,
  secondaryActionLabel,
  disabled,
  body,
  footer,
  onOpen,
  onClose,
  onSubmit,
  secondaryAction,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

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
