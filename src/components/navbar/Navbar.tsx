'use client';

import styled from 'styled-components';
import { usePathname } from 'next/navigation';

import Logo from './Logo';
import NavItems from './NavItems';

import { navItems } from '@/data';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Container>
      <Logo />
      <NavItems links={navItems} path={pathname} />
      <Button>Upload your design</Button>
    </Container>
  );
};

const Container = styled.nav`
  background-color: var(--clr-white);
  padding: 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  gap: 5rem;
  align-items: center;
`;

const Button = styled.button`
  justify-self: end;

  display: inline-block;
  border: none;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;

  &:disabled {
    opacity: 0.75;
  }
`;

export default Navbar;
