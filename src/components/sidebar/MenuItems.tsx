'use client';

import { FC } from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import { MenuItemsProps } from '@/types';

const MenuItems: FC<MenuItemsProps> = ({ mode, links, onClose }) => {
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
