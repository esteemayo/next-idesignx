'use client';

import styled from 'styled-components';

const PrintHero = () => {
  return (
    <Header>
      <Heading>Print</Heading>
      <Text>
        We offer you the easiest way to get your <Br />
        materials printed without breaking a sweat!
      </Text>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  background-color: crimson;
`;

const Heading = styled.h1``;

const Text = styled.p``;

const Br = styled.br``;

export default PrintHero;
