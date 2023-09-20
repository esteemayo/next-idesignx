'use client';

import styled from 'styled-components';

const Hero = () => {
  return (
    <Header>
      <Heading>
        <Text>You imagine.</Text>
        <Text>We print.</Text>
        <Text>
          We <b>Deliver.</b>
        </Text>
      </Heading>
    </Header>
  );
};

const Header = styled.header`
  background-color: yellow;
  grid-column: full-start / full-end;
`;

const Heading = styled.h1``;

const Text = styled.span``;

export default Hero;
