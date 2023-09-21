import Link from 'next/link';
import styled from 'styled-components';
import { useMemo } from 'react';

interface NavItemProps {
  url: string;
  label: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ url, label, path }) => {
  const isActive = useMemo(() => {
    return url === path;
  }, [path, url]);

  return (
    <Container isActive={isActive}>
      <Link href={url}>{label}</Link>
    </Container>
  );
};

const Container = styled.li`
  color: ${({ isActive }) => setActiveColor(isActive)};

  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 300;
      font-size: 1.6rem;
      color: currentColor;
      outline-color: var(--clr-purple-light-3);
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: var(--clr-purple-light-2);
    }
  }
`;

const setActiveColor = (isActive: boolean) => {
  return isActive ? 'var(--clr-purple-dark-2)' : 'var(--clr-purple-light-1)';
};

export default NavItem;
