'use client';

import styled from 'styled-components';
import NavItem from './NavItem';

type NavItemsType = {
  id: number;
  url: string;
  label: string;
};

interface NavItemsProps {
  links: Array<NavItemsType>;
  path: string;
}

const NavItems: React.FC<NavItemsProps> = ({ links, path }) => {
  return (
    <Container>
      {links.map((link) => {
        return <NavItem key={link.id} {...link} path={path} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, minmax(min-content, 1fr));
`;

export default NavItems;
