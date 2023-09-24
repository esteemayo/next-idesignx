'use client';

import React from 'react';
import styled from 'styled-components';

const AboutHero = () => {
  return (
    <Header>
      <Heading>About us</Heading>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  background-color: crimson;
`;

const Heading = styled.h1``;

export default AboutHero;
