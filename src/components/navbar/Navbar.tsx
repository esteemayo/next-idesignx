'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Logo from './Logo';

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <NavItems>
        <NavItem>
          <Link href='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link href='/designs'>Design</Link>
        </NavItem>
        <NavItem>
          <Link href='/prints'>Prints</Link>
        </NavItem>
        <NavItem>
          <Link href='/'>Gallery</Link>
        </NavItem>
        <NavItem>
          <Link href='/about'>About</Link>
        </NavItem>
        <NavItem>
          <Link href='/contact'>Contact</Link>
        </NavItem>
      </NavItems>
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

const LogoBox = styled.div`
  justify-self: start;
`;

const NavItems = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, minmax(min-content, 1fr));
`;

const NavItem = styled.li`
  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 300;
      font-size: 1.6rem;
      color: var(--clr-purple-light-3);
      outline-color: #eee;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: var(--clr-purple-light-2);
    }
  }
`;

const Button = styled.button`
  justify-self: end;

  display: inline-block;
  border: none;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  background-image: linear-gradient(
    to left top,
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
    opacity: 0.5;
  }
`;

export default Navbar;
