import styled from 'styled-components';
import Link from 'next/link';
import { useMemo } from 'react';

import { useMenu } from '@/hooks/useMenu';

interface NavItemProps {
  url: string;
  label: string;
  path: string;
}

interface IContainer {
  active: string;
}

const NavItem: React.FC<NavItemProps> = ({ url, label, path }) => {
  const { isOpen, onClose } = useMenu();

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

  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 300;
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

const setActiveColor = (isActive: string) => {
  return isActive === 'true'
    ? 'var(--clr-purple-dark-2)'
    : 'var(--clr-purple-light-1)';
};

export default NavItem;
