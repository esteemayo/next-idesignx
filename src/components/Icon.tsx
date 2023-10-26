'use client';

import { FC } from 'react';
import styled from 'styled-components';

import { IconProps } from '@/types';

const Icon: FC<IconProps> = ({ icon }) => {
  return (
    <SVG>
      <Use xlinkHref={`svg/sprite.svg#icon-${icon}`}></Use>
    </SVG>
  );
};

const SVG = styled.svg``;

const Use = styled.use``;

export default Icon;
