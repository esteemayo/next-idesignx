'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface MenuLinkProps {
  url: string;
  label: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ url, label }) => {
  return (
    <Container>
      <StyledLink href={url}>{label}</StyledLink>
    </Container>
  );
};

const Container = styled.li`
  color: currentColor;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default MenuLink;
