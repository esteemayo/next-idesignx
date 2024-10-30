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

  @media only screen and (max-width: 68.75em) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }

  @media only screen and (max-width: 64em) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

  @media only screen and (max-width: 48em) {
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  @media only screen and (max-width: 37.5em) {
    gap: 1rem;
  }

  @media only screen and (max-width: 26.875em) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;

export default MenuLinks;
