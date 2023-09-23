'use client';

import styled from 'styled-components';
import MenuItem from './MenuItem';

type MenuItemsType = {
  id: number;
  url: string;
  label: string;
};

interface MenuItemsProps {
  links: Array<MenuItemsType>;
}

const MenuItems: React.FC<MenuItemsProps> = ({ links }) => {
  return (
    <Container>
      {links.map((link) => {
        return <MenuItem key={link.id} {...link} />;
      })}
    </Container>
  );
};

const Container = styled.ul``;

export default MenuItems;
