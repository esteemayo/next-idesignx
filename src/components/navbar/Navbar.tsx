'use client';

import styled from 'styled-components';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import Logo from './Logo';
import Hamburger from './Hamburger';
import NavItems from './NavItems';
import Button from '../buttons/Button';

import { navItems } from '@/data';
import { useMenu } from '@/hooks/useMenu';

const Navbar = () => {
  const pathname = usePathname();
  const { showMenu, handleToggle } = useMenu();

  const activeMenu = useMemo(() => {
    return showMenu.toString();
  }, [showMenu]);

  return (
    <Container active={activeMenu}>
      <Wrapper>
        <Hamburger isOpen={showMenu} onToggle={handleToggle} />
        <Logo />
      </Wrapper>
      <NavItems links={navItems} path={pathname} />
      <Box>
        <Button nav type='button' label='Upload your design' />
      </Box>
    </Container>
  );
};

const Container = styled.nav`
  background-color: var(--clr-white);
  padding: 1.5rem;
  position: relative;
  z-index: 3000;

  display: ${({ active }) => (active === 'true' ? 'none' : 'grid')};
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
