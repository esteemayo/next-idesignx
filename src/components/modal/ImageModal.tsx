'use client';

import styled from 'styled-components';

interface ImageModalProps {
  isOpen: boolean;
  onClose(): void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose }) => {
  return (
    <Overlay>
      <Wrapper>
        <ImageContainer>ImageModal</ImageContainer>
      </Wrapper>
    </Overlay>
  );
};

const Overlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.7);
  z-index: 5000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div``;

const ImageContainer = styled.div``;

export default ImageModal;
