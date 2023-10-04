'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

import { useDarkMode } from '@/hooks/useDarkMode';

interface MenuLinkProps {
  url: string;
  label: string;
  activeMode: string;
}

interface ILink {
  mode: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ url, label, activeMode }) => {
  const mode = useDarkMode((state) => state.mode);

  return (
    <Container>
      <StyledLink href={url} mode={activeMode}>
        {label}
      </StyledLink>
    </Container>
  );
};

const Container = styled.li`
  color: currentColor;
`;

const StyledLink = styled(Link)<ILink>`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 1.5rem;
  color: inherit;
  border-radius: 2px;
  outline-color: var(--clr-purple-light-3);
  transition: all 0.2s;

  @media only screen and (max-width: 37.5em) {
    font-size: 1.3rem;
    padding: 1.2rem;
  }

  &:hover,
  &:active {
    background-color: ${({ mode }) => mode === 'true' && '#141a1f'};
    background-image: ${({ mode }) =>
      mode === 'false' &&
      css`
    linear-gradient(
      to right bottom,
      var(--clr-purple-dark-1),
      var(--clr-purple-light-1),
      var(--clr-purple-light-2),
      var(--clr-purple-light-3)
    )
    `};
    transform: translateY(-3px) scale(1.1);
  }
`;

export default MenuLink;
