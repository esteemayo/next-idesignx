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
  links: Array<MenuItemsType>;
}

const MenuItems: React.FC<MenuItemsProps> = ({ links }) => {
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
        return <MenuItem key={link.id} {...link} onClick={handleClose} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;
  margin-top: 3rem;
`;

export default MenuItems;
