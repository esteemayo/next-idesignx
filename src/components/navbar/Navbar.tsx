'use client';

import styled from 'styled-components';
import { useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import Logo from './Logo';
import Hamburger from './Hamburger';
import NavItems from './NavItems';
import Button from '../buttons/Button';

import { useMenu } from '@/hooks/useMenu';
import { useDesignModal } from '@/hooks/useDesignModal';

import { navItems } from '@/data';

interface IContainer {
  active: string;
}

const Navbar = () => {
  const pathname = usePathname();

  const designModal = useDesignModal();
  const { isOpen, onOpen } = useMenu();

  console.log(designModal.isOpen);

  const activeMenu = useMemo(() => {
    return isOpen.toString();
  }, [isOpen]);

  return (
    <Container active={activeMenu}>
      <Wrapper>
        <Hamburger isOpen={isOpen} onToggle={onOpen} />
        <Logo />
      </Wrapper>
      <NavItems links={navItems} path={pathname} />
      <Box>
        <Button
          nav
          type='button'
          label='Upload your design'
          onClick={designModal.onOpen}
        />
      </Box>
    </Container>
  );
};

const Container = styled.nav<IContainer>`
  display: ${({ active }) => (active === 'true' ? 'none' : 'grid')};
  background-color: var(--clr-white);
  padding: 1.5rem;
  position: relative;
  z-index: 3000;

  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  gap: 5rem;
  align-items: center;

  @media only screen and (max-width: 48em) {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Box = styled.div`
  justify-self: end;
`;

export default Navbar;
