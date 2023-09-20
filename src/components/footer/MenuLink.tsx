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
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1.5rem;
  color: inherit;
  text-align: center;
`;

export default MenuLink;
