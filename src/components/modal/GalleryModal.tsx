'use client';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Overlay } from '../common/Overlay';
import GalleryImage from '../gallery/GalleryImage';

import { GalleryModalProps } from '@/types';

interface IBtn {
  direction: string;
}

const GalleryModal = ({
  image,
  isOpen,
  index,
  lastIndex,
  onClose,
  onChange,
  onClick,
}: GalleryModalProps) => {
  const [showModal, setShowModal] = useState(false);

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

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onChange(index === 0 ? lastIndex : index - 1);
      } else if (e.key === 'ArrowRight') {
        onChange(index === lastIndex ? 0 : index + 1);
      }
    },
    [index, lastIndex, onChange]
  );

  const activeModal = useMemo(() => {
    return showModal?.toString();
  }, [showModal]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay className='overlay' onClick={closeModalHandler}>
      <Container direction='left'>
        <Button direction='left' onClick={() => onClick('left')}>
          <ArrowBackIosIcon />
        </Button>
      </Container>
      <GalleryImage active={activeModal} image={image} />
      <Container direction='right'>
        <Button direction='right' onClick={() => onClick('right')}>
          <ArrowForwardIosIcon />
        </Button>
      </Container>
      <Wrapper>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </Wrapper>
    </Overlay>
  );
};

const Wrapper = styled.div`
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

const Container = styled.div<IBtn>`
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

export default GalleryModal;
