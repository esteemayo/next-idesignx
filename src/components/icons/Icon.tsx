'use client';

import styled from 'styled-components';

interface IconProps {
  icon: string;
}

const Icon = ({ icon }: IconProps) => {
  return (
    <SVG>
      <Use xlinkHref={`svg/sprite.svg#icon-${icon}`}></Use>
    </SVG>
  );
};

const SVG = styled.svg``;

const Use = styled.use``;

export default Icon;
