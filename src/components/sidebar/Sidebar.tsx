'use client';

import { useCallback } from 'react';
import styled from 'styled-components';

import MenuItems from './MenuItems';
import Hamburger from '../navbar/Hamburger';
import Button from '../buttons/Button';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useMenu } from '@/hooks/useMenu';
import { useDesignModal } from '@/hooks/useDesignModal';

import { navItems } from '@/data';

interface IContainer {
  active: string;
}

const Sidebar = () => {
  const { isOpen, onClose } = useMenu();
  const designModal = useDesignModal();
  const { activeMenu } = useActiveMenu();

  const handleOpen = useCallback(() => {
    designModal.onOpen();
    onClose();
  }, [designModal, onClose]);

  return (
    <Container active={activeMenu}>
      <Wrapper>
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

  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }

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
