'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from '../buttons/Button';

import { Overlay } from '../common/Overlay';
import { Wrapper } from '../common/Wrapper';

import { ModalProps } from '@/types';

interface IBtn {
  size?: string | null | undefined;
}

const Modal = ({
  isOpen,
  title,
  actionLabel,
  secondaryActionLabel,
  disabled,
  size,
  body,
  footer,
  onClose,
  onSubmit,
  secondaryAction,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

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

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

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

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay className='overlay' onClick={closeModalHandler}>
      <Wrapper active={activeModal}>
        <Box>
          <CloseButtonContainer>
            <CloseButton onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
            <Heading>{title}</Heading>
          </CloseButtonContainer>
          <Body>{body}</Body>
          <Footer>
            <ButtonContainer size={size}>
              {secondaryActionLabel && secondaryAction && (
                <Button
                  type='button'
                  disabled={!!disabled}
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                  outline
                />
              )}
              <Button
                type='button'
                disabled={!!disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
            </ButtonContainer>
            {footer}
          </Footer>
        </Box>
      </Wrapper>
    </Overlay>
  );
};

const Box = styled.div`
  width: 50rem;
  background-color: ${({ theme }) => theme.bg};
  padding: 3rem;
  border-radius: 0.5rem;

  @media only screen and (max-width: 56.25em) {
    width: 52rem;
  }

  @media only screen and (max-width: 50em) {
    width: 53rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 50rem;
  }

  @media only screen and (max-width: 28.75em) {
    padding: 3rem 2rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 47rem;
  }

  @media only screen and (max-width: 25em) {
    width: 45rem;
    padding: 2rem;
  }

  @media only screen and (max-width: 24.375em) {
    width: 43rem;
  }

  @media only screen and (max-width: 23.75em) {
    width: 42rem;
  }

  @media only screen and (max-width: 23.4375em) {
    width: 40rem;
    padding: 2rem 1.5rem;
  }

  @media only screen and (max-width: 20.625em) {
    width: 37rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 34rem;
    padding: 1rem;
  }

  @media only screen and (max-width: 17.5em) {
    width: 32rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 60rem;
  }

  @media only screen and (min-width: 125em) {
    width: 65rem;
  }
`;

const CloseButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1.5rem;
  left: -2rem;

  display: inline-block;
  border: none;
  font-size: 2rem;
  padding: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textSoft};
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;
  transition: all 0.2s;

  @media only screen and (max-width: 64em) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 28.75em) {
    top: -2rem;
    left: 0;
  }

  @media only screen and (max-width: 25em) {
    top: -1rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 3.5rem;
  }

  &:hover {
    opacity: 0.7;
  }

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

const Heading = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 1rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.4rem;
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
`;

const Body = styled.div`
  padding: 1.5rem 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-bottom: 1rem;
`;

const ButtonContainer = styled.div<IBtn>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > * {
    width: ${({ size }) => (size === 'true' ? '50%' : '100%')};
  }
`;

export default Modal;
