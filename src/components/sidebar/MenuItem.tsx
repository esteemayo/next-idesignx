'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface MenuItemProps {
  url: string;
  label: string;
  onClick?(): void;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, label, onClick }) => {
  return (
    <ListItem onClick={onClick}>
      <StyledLink href={url}>{label}</StyledLink>
    </ListItem>
  );
};

const ListItem = styled.li`
  color: currentColor;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 300;
  font-size: 2rem;
  color: inherit;
  outline-color: var(--clr-purple-light-3);

  &:active {
    color: inherit;
  }
`;

export default MenuItem;
