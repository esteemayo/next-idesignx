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

  @media only screen and (max-width: 30em) {
    width: 2.5rem;
    height: 2.5rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: ${({ mode }) => setBcgColor(mode)};
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

    @media only screen and (max-width: 30em) {
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: 2.2rem;
    }

    @media only screen and (min-width: 125em) {
      font-size: 2.4rem;
    }
  }
`;

const setBcgColor = (mode: string): string => {
  return mode === 'true' ? '#2b3138' : '#e5bffd';
};

const setColor = (mode: string, color1: string, color2: string): string => {
  return mode !== 'true' ? color1 : color2;
};

export default InfoIcon;
