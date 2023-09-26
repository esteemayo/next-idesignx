'use client';

import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onOpen, onClose }) => {
  return <Container>Modal</Container>;
};

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
`;

export default Modal;
