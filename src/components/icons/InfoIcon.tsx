'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { InfoIconProps } from '@/types';

interface IMode {
  mode: string;
}

const InfoIcon = ({ url, icon: Icon, mode }: InfoIconProps) => {
  return (
    <StyledLink href={url} mode={mode}>
      <Icon />
    </StyledLink>
  );
};

const StyledLink = styled(Link)<IMode>`
  width: 3rem;
  height: 3rem;
  text-decoration: none;
  background-color: transparent;
  color: currentColor;
  outline-color: ${({ theme }) => theme.outline};
  border-radius: 50%;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: ${({ mode }) =>
      mode === 'true' ? '#2b3138' : '#e5bffd'};
    color: currentColor;
  }

  &:first-child {
    color: ${({ mode }) =>
      setColor(mode, 'currentColor', 'var(--clr-facebook)')};

    &:hover {
      color: ${({ mode }) =>
        setColor(mode, 'var(--clr-facebook)', 'currentColor')};
    }
  }

  &:nth-child(2) {
    color: ${({ mode }) =>
      setColor(mode, 'currentColor', 'var(--clr-twitter)')};

    &:hover {
      color: ${({ mode }) =>
        setColor(mode, 'var(--clr-twitter)', 'currentColor')};
    }
  }

  &:last-child {
    color: ${({ mode }) =>
      setColor(mode, 'currentColor', 'var(--clr-instagram-2)')};

    &:hover {
      color: ${({ mode }) =>
        setColor(mode, 'var(--clr-instagram-2)', 'currentColor')};
    }
  }

  svg {
    font-size: 2rem;
    fill: currentColor;
  }
`;

export default InfoIcon;
