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
  grid-column: full-start / full-end;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(3, 3, 3, 0.7)
    ),
    url(../img/hero.jpg);
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
`;

const Heading = styled.h1``;

const Text = styled.span``;

export default Hero;
