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
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1.5rem;
  color: inherit;
  text-align: center;
  outline-color: var(--clr-purple-light-3);
  transition: all 0.2s;

  &:hover,
  &:active {
    background-image: linear-gradient(
      to right bottom,
      var(--clr-purple-dark),
      var(--clr-purple-light-1),
      var(--clr-purple-light-2),
      var(--clr-purple-light-3)
    );
    transform: translateY(-3px) scale(1.1);
  }
`;

export default MenuLink;
