'use client';

import { useCallback } from 'react';
import styled, { css } from 'styled-components';

import Hamburger from '../navbar/Hamburger';
import NavButton from '../navbar/NavButton';

import MenuItems from './MenuItems';
import Button from '../buttons/Button';

import { useDesignModal } from '@/hooks/useDesignModal';
import { useMenu } from '@/hooks/useMenu';
import { useLoginModal } from '@/hooks/useLoginModal';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useActiveMode } from '@/hooks/useActiveMode';

import { navItems } from '@/data';

interface IContainer {
  active: string;
  mode: string;
}

interface IWrapper {
  mode: string;
}

const Sidebar = () => {
  const { isOpen, onClose } = useMenu();
  const designModal = useDesignModal();
  const { activeMenu } = useActiveMenu();
  const { activeMode } = useActiveMode();
  const loginModal = useLoginModal();

  const handleOpen = useCallback(() => {
    designModal.onOpen();
    onClose();
  }, [designModal, onClose]);

  const handleClick = useCallback(() => {
    loginModal.onOpen();
    onClose();
  }, [loginModal, onClose]);

  const handleClose = useCallback(() => {
    if (isOpen) {
      onClose();
    }

    return undefined;
  }, [isOpen, onClose]);

  return (
    <Container active={activeMenu} mode={activeMode}>
      <Wrapper mode={activeMode}>
        <Hamburger isOpen={isOpen} onToggle={onClose} />
        <ButtonContainer>
          <NavButton label='Login' onClick={handleClick} />
          <Button
            nav='true'
            type='button'
            label='Upload your design'
            onClick={handleOpen}
          />
        </ButtonContainer>
      </Wrapper>
      <MenuItems mode={activeMode} links={navItems} onClose={handleClose} />
    </Container>
  );
};

const Container = styled.aside<IContainer>`
  width: 45rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${({ active }) => (active === 'true' ? 0 : '-100%')};
  background-color: ${({ mode }) =>
    mode === 'true' && 'var(--clr-bg-dark-secondary)'};
  background-image: ${({ mode }) =>
    mode !== 'true' &&
    css`
  linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  )
  `};
  color: var(--clr-white);
  z-index: 2000;
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.77, 0.2, 0.05, 1),
    cubic-bezier(0.77, 0.2, 0.05, 1), cubic-bezier(0.77, 0.2, 0.05, 1);

  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }

  @media only screen and (min-width: 48em) {
    display: none;
  }
`;

const Wrapper = styled.div<IWrapper>`
  padding: 3rem;
  background-color: ${({ mode }) => setBcgColor(mode)};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  & > * {
    &:first-child {
      font-weight: lighter;
      font-size: 2rem;
      color: currentColor;
    }
  }
`;

const setBcgColor = (mode: string): string => {
  return mode === 'true'
    ? 'var(--clr-bg-dark-primary)'
    : 'var(--clr-purple-light-1)';
};

export default Sidebar;
