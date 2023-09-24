'use client';

import styled from 'styled-components';

interface IconProps {
  icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <SVG>
      <Use xlinkHref={`img/sprite.svg#${icon}`}></Use>
    </SVG>
  );
};

const SVG = styled.svg``;

const Use = styled.use``;

export default Icon;
