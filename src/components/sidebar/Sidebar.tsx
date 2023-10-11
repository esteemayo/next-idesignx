'use client';

import { useCallback } from 'react';
import styled, { css } from 'styled-components';

import MenuItems from './MenuItems';
import Hamburger from '../navbar/Hamburger';
import Button from '../buttons/Button';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useMenu } from '@/hooks/useMenu';
import { useDesignModal } from '@/hooks/useDesignModal';
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

  const handleOpen = useCallback(() => {
    designModal.onOpen();
    onClose();
  }, [designModal, onClose]);

  return (
    <Container active={activeMenu} mode={activeMode}>
      <Wrapper mode={activeMode}>
        <Hamburger isOpen={isOpen} onToggle={onClose} />
        <Button
          nav='true'
          type='button'
          label='Upload your design'
          onClick={handleOpen}
        />
      </Wrapper>
      <MenuItems links={navItems} />
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
  background-color: ${({ mode }) =>
    mode === 'true' ? '--clr-bg-dark-primary' : 'var(--clr-purple-light-1)'};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Sidebar;
