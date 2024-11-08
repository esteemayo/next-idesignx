'use client';

import { useCallback } from 'react';
import styled, { css } from 'styled-components';

import Hamburger from '../navbar/Hamburger';
import NavButton from '../navbar/NavButton';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useMenu } from '@/hooks/useMenu';
import { useDesignModal } from '@/hooks/useDesignModal';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useActiveMode } from '@/hooks/useActiveMode';

import { navItems } from '@/data';
import MenuItems from './MenuItems';

interface IContainer {
  active: string;
  mode: string;
}

interface IWrapper {
  mode: string;
}

const Sidebar = () => {
  const designModal = useDesignModal();
  const menu = useMenu();
  const loginModal = useLoginModal();

  const { activeMenu } = useActiveMenu();
  const { activeMode } = useActiveMode();

  const handleOpen = useCallback(() => {
    designModal.onOpen();
    menu.onClose();
  }, [designModal, menu]);

  const handleClick = useCallback(() => {
    loginModal.onOpen();
    menu.onClose();
  }, [loginModal, menu]);

  const handleClose = useCallback(() => {
    if (menu.isOpen) {
      menu.onClose();
    }

    return undefined;
  }, [menu]);

  return (
    <Container active={activeMenu} mode={activeMode}>
      <Wrapper mode={activeMode}>
        <Hamburger isOpen={menu.isOpen} onToggle={menu.onClose} />
        <ButtonContainer>
          <NavButton label='Login' onClick={handleClick} />
        </ButtonContainer>
      </Wrapper>
      <MenuItems mode={activeMode} links={navItems} onClose={handleClose} />
    </Container>
  );
};

const Container = styled.aside<IContainer>`
  width: 50rem;
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
  z-index: 4000;
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.77, 0.2, 0.05, 1),
    cubic-bezier(0.77, 0.2, 0.05, 1), cubic-bezier(0.77, 0.2, 0.05, 1);

  @media only screen and (max-width: 26.875em) {
    width: 100%;
  }

  @media only screen and (min-width: 48.0625em) {
    display: none;
  }
`;

const Wrapper = styled.div<IWrapper>`
  padding: 3rem;
  /* background-color: ${({ mode }) => setBcgColor(mode)}; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5rem;

  @media only screen and (max-width: 25em) {
    gap: 3rem;
  }

  & > * {
    &:first-child {
      font-weight: lighter;
      font-size: 2rem;
      color: currentColor;

      @media only screen and (max-width: 30em) {
        font-size: 1.8rem;
      }

      @media only screen and (max-width: 21.5em) {
        font-size: 1.7rem;
      }
    }

    &:nth-child(2) {
      @media only screen and (max-width: 25em) {
        font-size: 1.65rem;
      }
    }
  }
`;

const setBcgColor = (mode: string): string => {
  return mode === 'true'
    ? 'var(--clr-bg-dark-primary)'
    : 'var(--clr-purple-light-1)';
};

export default Sidebar;
