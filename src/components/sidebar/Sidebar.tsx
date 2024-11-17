'use client';

import { useCallback } from 'react';
import styled, { css } from 'styled-components';

import MenuItems from './MenuItems';

import Hamburger from '../navbar/Hamburger';
import NavButton from '../navbar/NavButton';

import { useMenu } from '@/hooks/useMenu';
import { useLoginModal } from '@/hooks/useLoginModal';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useActiveMode } from '@/hooks/useActiveMode';

import { navItems } from '@/data';
import Button from '../buttons/Button';
import { useDesignModal } from '@/hooks/useDesignModal';

interface IContainer {
  active: string;
  mode: string;
}

interface IMode {
  mode: string;
}

const Sidebar = () => {
  const menu = useMenu();
  const loginModal = useLoginModal();

  const onOpen = useDesignModal((store) => store.onOpen);

  const { activeMenu } = useActiveMenu();
  const { activeMode } = useActiveMode();

  const handleClick = useCallback(() => {
    loginModal.onOpen();
    menu.onClose();
  }, [loginModal, menu]);

  const handleUpload = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      onOpen();
      menu.onClose();
    },
    [menu, onOpen]
  );

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
        <ButtonContainer mode={activeMode}>
          <NavButton label='Login' onClick={handleClick} />
          <Button type='button' label='Upload' small onClick={handleUpload} />
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
    left: unset;
    right: ${({ active }) => (active === 'true' ? 0 : '-100%')};
  }

  @media only screen and (min-width: 50.0625em) {
    display: none;
  }
`;

const Wrapper = styled.div<IMode>`
  padding: 3rem;
  /* background-color: ${({ mode }) => setBcgColor(mode)}; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div<IMode>`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: 25em) {
    gap: 3rem;
  }

  & > * {
    &:first-child {
      font-size: 2rem;
      padding: 0.7rem 1.25rem;
      color: var(--clr-white);
      border: 1px solid currentColor;
      border-radius: 0.5rem;
      outline: none;
      z-index: 5000;

      @media only screen and (max-width: 30em) {
        font-size: 1.8rem;
        padding: 0.6rem 1rem;
      }

      @media only screen and (max-width: 25em) {
        padding: 0.55rem 0.9rem;
      }

      @media only screen and (max-width: 21.5em) {
        font-size: 1.7rem;
        padding: 0.5rem 0.85rem;
      }
    }

    &:last-child {
      display: none;

      @media only screen and (max-width: 26.875em) {
        display: flex;
        font-size: 2rem;
        padding: 0.7rem 1.25rem;
        color: var(--clr-white);
        border: 1px solid currentColor;
        border-radius: 0.5rem;
        outline: none;
        z-index: 5000;
      }
    }

    /* &:nth-child(2) {
      @media only screen and (max-width: 25em) {
        font-size: 1.65rem;
      }
    } */
  }
`;

const setBcgColor = (mode: string): string => {
  return mode === 'true'
    ? 'var(--clr-bg-dark-primary)'
    : 'var(--clr-purple-light-1)';
};

export default Sidebar;
