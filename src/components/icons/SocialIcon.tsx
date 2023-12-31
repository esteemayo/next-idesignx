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
