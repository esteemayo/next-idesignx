'use client';

import styled from 'styled-components';
import { useCallback, useMemo } from 'react';

import Logo from '../navbar/Logo';
import Hamburger from '../navbar/Hamburger';

import MenuItems from './MenuItems';
import Button from '../buttons/Button';

import { navItems } from '@/data';
import { useMenu } from '@/hooks/useMenu';

interface IContainer {
  active: string;
}

const Sidebar = () => {
  const { isOpen, onClose } = useMenu();

  const handleClose = useCallback(() => {
    if (isOpen) {
      onClose();
      return;
    }
  }, [isOpen, onClose]);

  const activeMenu = useMemo(() => {
    return isOpen.toString();
  }, [isOpen]);

  return (
    <Container active={activeMenu}>
      <Wrapper>
        <Hamburger isOpen={isOpen} onToggle={onClose} />
        <Button nav='true' type='button' label='Upload your design' />
      </Wrapper>
      <MenuItems links={navItems} />
    </Container>
  );
};

const Container = styled.aside<IContainer>`
  width: 45rem;
  height: 100%;
  padding: 3px 2rem;
  position: fixed;
  top: 0;
  left: ${({ active }) => (active === 'true' ? 0 : '-100%')};
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
  z-index: 2000;
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.77, 0.2, 0.05, 1),
    cubic-bezier(0.77, 0.2, 0.05, 1), cubic-bezier(0.77, 0.2, 0.05, 1);

  @media only screen and (min-width: 48em) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Sidebar;
