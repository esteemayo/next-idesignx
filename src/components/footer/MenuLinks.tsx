'use client';

import styled from 'styled-components';

import MenuLink from './MenuLink';
import { MenuLinksProps } from '@/types';

const MenuLinks = ({ links, mode }: MenuLinksProps) => {
  return (
    <Container>
      {links.map((link) => {
        return <MenuLink key={link.id} {...link} mode={mode} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 37.5em) {
    gap: 1rem;
  }
`;

export default MenuLinks;
