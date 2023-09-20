import Link from 'next/link';
import { useMemo } from 'react';
import styled from 'styled-components';

interface NavItemProps {
  url: string;
  label: string;
  pathname: string;
}

const NavItem: React.FC<NavItemProps> = ({ url, label, pathname }) => {
  const isActive = useMemo(() => {
    return url === pathname;
  }, [pathname, url]);

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
      outline-color: #eee;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: var(--clr-purple-light-2);
    }
  }
`;

const setActiveColor = (isActive: boolean) => {
  return isActive ? 'var(--clr-purple-light-1)' : 'var(--clr-purple-light-3)';
};

export default NavItem;
