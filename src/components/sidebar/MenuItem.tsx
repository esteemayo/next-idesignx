'use client';

import Link from 'next/link';
import { FC } from 'react';
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

const MenuItem: FC<MenuItemProps> = ({ url, mode, label, onClick }) => {
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
    border-bottom: 1px solid ${({ mode }) => setBorderColor(mode)};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 300;
  font-size: 2rem;
  color: inherit;
  outline-color: ${({ theme }) => theme.outline};

  &:active {
    color: inherit;
  }
`;

const setBorderColor = (mode: string): string => {
  return mode === 'true'
    ? 'var(--clr-bg-dark-tertiary)'
    : 'var(--clr-purple-light-3)';
};

export default MenuItem;
