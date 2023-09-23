'use client';

import styled from 'styled-components';

interface MenuItemProps {
  url: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, url }) => {
  return <ListItem>MenuItem</ListItem>;
};

const ListItem = styled.li``;

export default MenuItem;
