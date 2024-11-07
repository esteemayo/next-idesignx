import { useMemo } from 'react';
import Link from 'next/link';
import styled, { DefaultTheme } from 'styled-components';

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
      font-weight: ${({ active }) => (active === 'true' ? 600 : 300)};
      font-size: 100%;
      color: currentColor;
      outline-color: ${({ theme }) => theme.outline};
      transition: all 0.2s;

      @media only screen and (max-width: 56.25em) {
        font-size: 1.7rem;
      }

      @media only screen and (max-width: 50em) {
        font-size: 1.8rem;
      }

      @media only screen and (min-width: 112.5em) {
        font-size: 1.8rem;
      }

      @media only screen and (min-width: 125em) {
        font-size: 2rem;
      }
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
