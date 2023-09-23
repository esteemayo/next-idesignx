'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface MenuItemProps {
  url: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, label }) => {
  return (
    <ListItem>
      <StyledLink href={url}>{label}</StyledLink>
    </ListItem>
  );
};

const ListItem = styled.li`
  color: currentColor;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default MenuItem;
