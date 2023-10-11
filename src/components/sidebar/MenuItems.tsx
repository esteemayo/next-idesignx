'use client';

import styled from 'styled-components';
import MenuItem from './MenuItem';

type MenuItemsType = {
  id: number;
  url: string;
  label: string;
};

interface MenuItemsProps {
  mode: string;
  links: Array<MenuItemsType>;
  onClose(): void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ mode, links, onClose }) => {
  return (
    <Container>
      {links.map((link) => {
        return (
          <MenuItem key={link.id} {...link} mode={mode} onClick={onClose} />
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;
  padding: 5rem 3rem;
`;

export default MenuItems;
