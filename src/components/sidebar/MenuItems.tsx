'use client';

import { useCallback } from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import { useMenu } from '@/hooks/useMenu';

type MenuItemsType = {
  id: number;
  url: string;
  label: string;
};

interface MenuItemsProps {
  mode: string;
  links: Array<MenuItemsType>;
}

const MenuItems: React.FC<MenuItemsProps> = ({ mode, links }) => {
  const { isOpen, onClose } = useMenu();

  const handleClose = useCallback(() => {
    if (isOpen) {
      onClose();
    }

    return undefined;
  }, [isOpen, onClose]);

  return (
    <Container>
      {links.map((link) => {
        return (
          <MenuItem key={link.id} {...link} mode={mode} onClick={handleClose} />
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
