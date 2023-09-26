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
  width: 100vw;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.7);
`;

export default Modal;
