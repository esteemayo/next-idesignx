'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

import { useActiveMode } from '@/hooks/useActiveMode';

interface SocialIconProps {
  icon: string;
}

interface IMode {
  mode: string;
}

const SocialIcon = ({ icon }: SocialIconProps) => {
  const { activeMode } = useActiveMode();

  return (
    <Container href='/' mode={activeMode}>
      <Icon icon={icon}>&nbsp;</Icon>
    </Container>
  );
};

const Container = styled(Link)<IMode>`
  width: 4rem;
  height: 4rem;
  text-decoration: none;
  border-radius: 50%;
  outline-color: ${({ theme }) => theme.outline};
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 56.25em) {
    width: 4.25rem;
    height: 4.25rem;
  }

  @media only screen and (max-width: 50em) {
    width: 4.3rem;
    height: 4.3rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 4.35rem;
    height: 4.35rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 4.25rem;
    height: 4.25rem;
  }

  @media only screen and (max-width: 30em) {
    width: 4.15rem;
    height: 4.15rem;
  }

  @media only screen and (max-width: 27.5em) {
    width: 4rem;
    height: 4rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 4.25rem;
    height: 4.25rem;
  }

  @media only screen and (max-width: 25em) {
    width: 4rem;
    height: 4rem;
  }

  @media only screen and (max-width: 22.5em) {
    width: 3.8rem;
    height: 3.8rem;
  }

  @media only screen and (max-width: 21.5em) {
    width: 3rem;
    height: 3rem;
  }

  @media only screen and (max-width: 20em) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 4.25rem;
    height: 4.25rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 4.5rem;
    height: 4.5rem;
  }

  @media only screen and (min-width: 125em) {
    width: 5rem;
    height: 5rem;
  }

  &:hover {
    background-color: ${({ mode }) =>
      mode === 'true' ? '#2b3138' : '#f8e5fc'};
  }
`;

const Icon = styled.span<SocialIconProps>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: ${({ icon }) => setBcgColor(icon)};
  -webkit-mask-image: ${({ icon }) => setMaskImg(icon)};
  mask-image: ${({ icon }) => setMaskImg(icon)};
  background-image: ${({ icon }) =>
    icon === 'instagram'
      ? css`
  linear-gradient(
    to bottom left,
    var(--clr-instagram-1),
    var(--clr-instagram-2),
    var(--clr-instagram-3)
  )
  `
      : undefined};
  -webkit-mask-size: cover;
  mask-size: cover;

  @media only screen and (max-width: 56.25em) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media only screen and (max-width: 50em) {
    width: 2.3rem;
    height: 2.3rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 2.35rem;
    height: 2.35rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media only screen and (max-width: 30em) {
    width: 2.15rem;
    height: 2.15rem;
  }

  @media only screen and (max-width: 27.5em) {
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media only screen and (max-width: 25em) {
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (max-width: 22.5em) {
    width: 1.8rem;
    height: 1.8rem;
  }

  @media only screen and (max-width: 21.5em) {
    width: 1.7rem;
    height: 1.7rem;
  }

  @media only screen and (max-width: 20em) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media only screen and (min-width: 125em) {
    width: 3rem;
    height: 3rem;
  }
`;

const setBcgColor = (icon: string) => {
  if (icon === 'facebook') {
    return 'var(--clr-facebook)';
  } else if (icon === 'twitter') {
    return 'var(--clr-twitter)';
  } else if (icon === 'instagram') {
    return 'var(--clr-instagram)';
  }
};

const setMaskImg = (icon: string) => {
  if (icon === 'facebook') {
    return 'url(/svg/facebook.svg)';
  } else if (icon === 'twitter') {
    return 'url(/svg/twitter.svg)';
  } else if (icon === 'instagram') {
    return 'url(/svg/instagram.svg)';
  }
};

export default SocialIcon;
