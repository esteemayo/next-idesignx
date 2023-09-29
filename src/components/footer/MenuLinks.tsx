'use client';

import styled from 'styled-components';

import MenuLink from './MenuLink';

type MenuLinksType = {
  id: number;
  url: string;
  label: string;
};

interface MenuLinksProps {
  links: Array<MenuLinksType>;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ links }) => {
  return (
    <Container>
      {links.map((link) => {
        return <MenuLink key={link.id} {...link} />;
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
