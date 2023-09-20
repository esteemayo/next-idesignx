'use client';

import styled from 'styled-components';

const Hero = () => {
  return (
    <Header>
      <Heading></Heading>
    </Header>
  );
};

const Header = styled.header`
  background-color: yellow;
  grid-column: full-start / full-end;
`;

const Heading = styled.h1``;

export default Hero;
