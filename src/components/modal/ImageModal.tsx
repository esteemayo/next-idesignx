'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface ImageModalProps {
  isOpen: boolean;
  onClose(): void;
}

interface IWrapper {
  active: string | null | undefined;
}

interface IBtn {
  direction: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const closeModalHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as Element;

      if (target.classList.contains('overlay')) {
        handleClose();
      }
    },
    [handleClose]
  );

  const activeModal = useMemo(() => {
    return showModal?.toString();
  }, [showModal]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay className='overlay' onClick={closeModalHandler}>
      <Button direction='left'>
        <ArrowBackIosIcon />
      </Button>
      <Wrapper active={activeModal}>
        <ImageContainer>
          <StyledImage
            src='/img/gallery-hero.jpg'
            width={1000}
            height={500}
            alt=''
          />
        </ImageContainer>
      </Wrapper>
      <Button direction='right'>
        <ArrowForwardIosIcon />
      </Button>
      <ButtonWrapper>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </ButtonWrapper>
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

const Wrapper = styled.div<IWrapper>`
  transform: translateY(${({ active }) => (active === 'true' ? 0 : '-100%')});
  opacity: ${({ active }) => (active === 'true' ? 1 : 0)};
  transition: all 300ms;
`;

const ImageContainer = styled.div`
  width: 100rem;
  height: 50rem;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 7rem;
  left: 10rem;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  width: 4rem;
  height: 4rem;
  font-size: 3rem;
  background-color: transparent;
  color: var(--clr-white);
  border-radius: 50%;
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #29292a;
    transform: scale(0.9);
  }

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

const Button = styled.button<IBtn>`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '10rem'};
  right: ${({ direction }) => direction === 'right' && '10rem'};
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;
  border: none;
  font-size: 4rem;
  background-color: transparent;
  color: var(--clr-white);
  border-radius: 50%;
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #29292a;
    transform: scale(0.9);
  }

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

export default ImageModal;
