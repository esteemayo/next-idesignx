'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { usePathname } from 'next/navigation';

import Logo from './Logo';
import Hamburger from './Hamburger';
import NavItems from './NavItems';
import Button from '../buttons/Button';

import { navItems } from '@/data';

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(true);

  const handleToggle = useCallback(() => {
    setShowMenu((value) => !value);
  }, []);

  return (
    <Container>
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
  display: none;

  @media only screen and (min-width: 48em) {
    background-color: var(--clr-white);
    padding: 1.5rem;
    position: relative;
    z-index: 3000;

    display: grid;
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
    gap: 5rem;
    align-items: center;
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
