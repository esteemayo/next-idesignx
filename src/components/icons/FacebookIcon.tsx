'use client';

import styled, { css } from 'styled-components';

import { IconLink } from '../buttons/IconLink';

interface FacebookIconProps {
  icon: string;
  mode: string;
}

interface ISpan {
  icon: string;
}

const FacebookIcon = ({ icon, mode }: FacebookIconProps) => {
  return (
    <IconLink href='#' mode={mode}>
      <Icon icon={icon}>&nbsp;</Icon>
    </IconLink>
  );
};

const Icon = styled.span<ISpan>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: ${({ icon }) => setBcgColor(icon)};
  -webkit-mask-image: ${({ icon }) => setMaskImg(icon)};
  mask-image: ${({ icon }) => setMaskImg(icon)};
  background-image: ${({ icon }) =>
    icon === 'instagram' &&
    css`
  linear-gradient(
    to bottom left,
    var(--clr-instagram-1),
    var(--clr-instagram-2),
    var(--clr-instagram-3)
  )
  `};
  -webkit-mask-size: cover;
  mask-size: cover;
`;

const setBcgColor = (icon: string) => {
  if (icon === 'facebook') {
    return '--clr-facebook';
  } else if (icon === 'twitter') {
    return '--clr-twitter';
  } else if (icon === 'instagram') {
    return '--clr-instagram';
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

export default FacebookIcon;
