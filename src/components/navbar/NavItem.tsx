import styled from 'styled-components';
import Link from 'next/link';
import { FC, useMemo } from 'react';

interface NavItemProps {
  url: string;
  label: string;
  path: string;
}

interface IContainer {
  active: string;
}

const NavItem: FC<NavItemProps> = ({ url, label, path }) => {
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
  color: ${({ active }) => setActiveColor(active)};
  color: ${({ active, theme }) =>
    active === 'true' ? theme.textActive : theme.textNav};

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

const setActiveColor = (isActive: string) => {
  return isActive === 'true'
    ? 'var(--clr-purple-dark-2)'
    : 'var(--clr-purple-light-1)';
};

export default NavItem;
