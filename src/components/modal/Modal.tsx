'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useMemo, useState } from 'react';

import Button from '../buttons/Button';

interface IWrapper {
  active: string | undefined;
}

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  actionLabel: string;
  secondaryActionLabel?: string;
  disabled?: boolean;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onClose(): void;
  onSubmit(): void;
  secondaryAction?(): void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  actionLabel,
  secondaryActionLabel,
  disabled,
  body,
  footer,
  onClose,
  onSubmit,
  secondaryAction,
}) => {
  const [showModal, setShowModal] = useState<boolean | undefined>(isOpen);

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

  if (!isOpen) {
    return null;
  }

  return (
    <Container className='overlay' onClick={closeModalHandler}>
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
            <ButtonContainer>
              {secondaryActionLabel && secondaryAction && (
                <Button
                  type='button'
                  outline='true'
                  disabled={disabled}
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                />
              )}
              <Button
                type='button'
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
            </ButtonContainer>
            {footer}
          </Footer>
        </Box>
      </Wrapper>
    </Container>
  );
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

const Wrapper = styled.div<IWrapper>`
  transform: translateY(${({ active }) => (active === 'true' ? 0 : '100%')});
  opacity: ${({ active }) => (active === 'true' ? 1 : 0)};
  transition: all 300ms;
`;

const Box = styled.div`
  width: 50rem;
  background-color: var(--clr-white);
  padding: 3rem;
  border-radius: 0.5rem;
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
  color: inherit;
  outline-color: var(--clr-gray-dark-2);
  cursor: pointer;
  transition: all 0.2s;

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
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const Body = styled.div`
  padding: 1.5rem 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export default Modal;
