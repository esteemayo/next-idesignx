'use client';

import Link from 'next/link';
import styled from 'styled-components';

import NavItem from './NavItem';

type NavItemsType = {
  id: number;
  url: string;
  label: string;
};

interface NavItemsProps {
  links: Array<NavItemsType>;
}

const NavItems: React.FC<NavItemsProps> = ({ links }) => {
  return (
    <Container>
      {links.map((link) => {
        return <NavItem key={link.id} {...link} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, minmax(min-content, 1fr));
`;

// const NavItem = styled.li`
//   a {
//     &:link,
//     &:visited {
//       text-decoration: none;
//       text-transform: capitalize;
//       font-weight: 300;
//       font-size: 1.6rem;
//       color: var(--clr-purple-light-3);
//       outline-color: #eee;
//       transition: all 0.2s;
//     }

//     &:hover,
//     &:active {
//       color: var(--clr-purple-light-2);
//     }
//   }
// `;

export default NavItems;
