'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface MenuItemProps {
  url: string;
  mode: string;
  label: string;
  onClick?(): void;
}

interface IList {
  mode: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, mode, label, onClick }) => {
  return (
    <ListItem mode={mode} onClick={onClick}>
      <StyledLink href={url}>{label}</StyledLink>
    </ListItem>
  );
};

const ListItem = styled.li<IList>`
  padding: 1.5rem 0.5rem;
  color: currentColor;

  &:not(:last-child) {
    border-bottom: 1px solid
      ${({ mode }) =>
        mode === 'true'
          ? 'var(--clr-bg-dark-tertiary)'
          : 'var(--clr-purple-light-3)'};
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
