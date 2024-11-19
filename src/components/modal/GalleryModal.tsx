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
      <Container>
        <Button type='button' direction='left' onClick={() => onClick('left')}>
          <ArrowBackIosIcon />
        </Button>
        <GalleryImage active={activeModal} image={image} />
        <Button
          type='button'
          direction='right'
          onClick={() => onClick('right')}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Container>
      <CloseButton onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
    </Overlay>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
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

  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3000;

  @media only screen and (max-width: 57.5em) {
    top: 3rem;
    left: 0.5rem;
  }

  @media only screen and (max-width: 56.25em) {
    width: 5rem;
    height: 5rem;
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 50em) {
    width: 5.5rem;
    height: 5.5rem;
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 6rem;
    height: 6rem;
    font-size: 2.7rem;
  }

  @media only screen and (max-width: 30em) {
    top: 10rem;
  }

  @media only screen and (max-width: 25em) {
    width: 6.5rem;
    height: 6.5rem;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 4.2rem;
    height: 4.2rem;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 4.5rem;
    height: 4.5rem;
    font-size: 2.7rem;
  }

  @media only screen and (min-width: 125em) {
    width: 5rem;
    height: 5rem;
    font-size: 3rem;
  }

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
  left: ${({ direction }) => direction === 'left' && '6rem'};
  right: ${({ direction }) => direction === 'right' && '5.43rem'};
  transform: translateY(-50%);

  border: none;
  font-size: 3rem;
  background-color: transparent;
  color: var(--clr-white);
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;

  @media only screen and (max-width: 87.5em) {
    left: ${({ direction }) => direction === 'left' && '3rem'};
    right: ${({ direction }) => direction === 'right' && '3rem'};
  }

  @media only screen and (max-width: 57.5em) {
    left: ${({ direction }) => direction === 'left' && '2rem'};
    right: ${({ direction }) => direction === 'right' && '2rem'};
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 3.2rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 3.3rem;
  }

  @media only screen and (max-width: 37.5em) {
    left: ${({ direction }) => direction === 'left' && '1rem'};
    right: ${({ direction }) => direction === 'right' && '1rem'};
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 3.25rem;
  }

  @media only screen and (max-width: 30em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 21.5em) {
    left: ${({ direction }) => direction === 'left' && '1rem'};
    right: ${({ direction }) => direction === 'right' && '1rem'};
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 3.2rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 4rem;
  }

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

const Common = styled.button`
  position: absolute;
  border: none;
  font-size: 3rem;
  background-color: transparent;
  color: var(--clr-white);
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

const LeftButton = styled(Common)`
  left: 6rem;
`;

const RightButton = styled(Common)`
  right: 5.43rem;
`;

export default GalleryModal;
