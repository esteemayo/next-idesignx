'use client';

import styled from 'styled-components';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Overlay } from '../common/Overlay';
import { Wrapper } from '../common/Wrapper';

import { ImageModalProps } from '@/types';

interface IBtn {
  direction: string;
}

const ImageModal: FC<ImageModalProps> = ({
  image,
  isOpen,
  onClose,
  onClick,
}) => {
  const [showModal, setShowModal] = useState<boolean | undefined>(isOpen);

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
      <ButtonContainer direction='left'>
        <Button direction='left' onClick={() => onClick('left')}>
          <ArrowBackIosIcon />
        </Button>
      </ButtonContainer>
      <Wrapper active={activeModal}>
        <Box>
          <ImageContainer>
            <StyledImage src={image} width={1100} height={500} alt='' />
          </ImageContainer>
        </Box>
      </Wrapper>
      <ButtonContainer direction='right' onClick={() => onClick('right')}>
        <Button direction='right'>
          <ArrowForwardIosIcon />
        </Button>
      </ButtonContainer>
      <ButtonWrapper>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </ButtonWrapper>
    </Overlay>
  );
};

const Box = styled.div`
  width: 120rem;
  height: 60rem;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 0.5rem;

  @media only screen and (max-width: 87.5em) {
    width: 110rem;
  }

  @media only screen and (max-width: 69.375em) {
    width: 100rem;
    height: 55rem;
  }

  @media only screen and (max-width: 62.5em) {
    width: 90rem;
    height: 50rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 80rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 70rem;
  }

  @media only screen and (max-width: 38.75em) {
    width: 60rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 50rem;
    height: 45rem;
  }

  @media only screen and (max-width: 30em) {
    width: 45rem;
    height: 40rem;
  }

  @media only screen and (max-width: 25em) {
    width: 40rem;
    height: 30rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 110rem;
  height: 50rem;

  @media only screen and (max-width: 87.5em) {
    width: 100rem;
  }

  @media only screen and (max-width: 69.375em) {
    width: 95rem;
  }

  @media only screen and (max-width: 62.5em) {
    width: 85rem;
    height: 45rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 75rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 65rem;
  }

  @media only screen and (max-width: 38.75em) {
    width: 55rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 45rem;
    height: 40rem;
  }

  @media only screen and (max-width: 30em) {
    width: 40rem;
    height: 35rem;
  }

  @media only screen and (max-width: 25em) {
    width: 35rem;
    height: 25rem;
  }
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3000;

  @media only screen and (max-width: 57.5em) {
    top: 3rem;
    left: 0.5rem;
  }

  @media only screen and (max-width: 30em) {
    top: 10rem;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  width: 4rem;
  height: 4rem;
  font-size: 2.3rem;
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

const ButtonContainer = styled.div<IBtn>`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '6rem'};
  right: ${({ direction }) => direction === 'right' && '6rem'};
  transform: translateY(-50%);

  @media only screen and (max-width: 87.5em) {
    left: ${({ direction }) => direction === 'left' && '3rem'};
    right: ${({ direction }) => direction === 'right' && '3rem'};
  }

  @media only screen and (max-width: 57.5em) {
    left: ${({ direction }) => direction === 'left' && '2rem'};
    right: ${({ direction }) => direction === 'right' && '2rem'};
  }
`;

const Button = styled.button<IBtn>`
  display: inline-block;
  border: none;
  font-size: 3rem;
  background-color: transparent;
  color: var(--clr-white);
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;

  @media only screen and (max-width: 57.5em) {
    font-size: 2.5rem;
  }

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

export default ImageModal;
