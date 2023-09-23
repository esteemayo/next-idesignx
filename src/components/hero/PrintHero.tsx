'use client';

import styled from 'styled-components';

const PrintHero = () => {
  return (
    <Header>
      <Heading>Print</Heading>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  background-color: crimson;
`;

const Heading = styled.h1``;

const Text = styled.p``;

export default PrintHero;
