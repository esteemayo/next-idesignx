'use client';

import Link from 'next/link';
import styled from 'styled-components';

const NavItems = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.ul`
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

export default NavItems;
