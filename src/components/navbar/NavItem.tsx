import styled, { DefaultTheme } from 'styled-components';
import Link from 'next/link';
import { useMemo } from 'react';

import { NavItemProps } from '@/types';

interface IContainer {
  active: string;
}

const NavItem = ({ url, label, path }: NavItemProps) => {
  const isActive = useMemo(() => {
    const activeUrl = url === path;
    return activeUrl.toString();
  }, [path, url]);

  return (
    <Container active={isActive}>
      <Link href={url}>{label}</Link>
    </Container>
  );
};

const Container = styled.li<IContainer>`
  color: ${({ active, theme }) => setActiveColor(active, theme)};

  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 300;
      color: currentColor;
      outline-color: ${({ theme }) => theme.outline};
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.textNavHov};
    }
  }
`;

const setActiveColor = (
  isActive: string,
  theme: DefaultTheme
): DefaultTheme => {
  return isActive === 'true' ? theme.textActive : theme.textNav;
};

export default NavItem;
