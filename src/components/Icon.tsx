'use client';

import { FC } from 'react';
import styled from 'styled-components';

interface IconProps {
  icon: string;
}

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
