'use client';

import styled from 'styled-components';

import NavItem from './NavItem';
import { NavItemsProps } from '@/types';

const NavItems = ({ links, path }: NavItemsProps) => {
  return (
    <Container>
      {links.map((link) => {
        return <NavItem key={link.id} {...link} path={path} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: none;

  @media only screen and (min-width: 48.0625em) {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(6, minmax(min-content, 1fr));
    align-items: center;
    justify-items: center;
    gap: 2rem;
  }
`;

export default NavItems;
