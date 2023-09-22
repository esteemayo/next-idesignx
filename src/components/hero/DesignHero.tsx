'use client';

import styled from 'styled-components';

const DesignHero = () => {
  return (
    <Header>
      <Heading>Custom designs</Heading>
      <Text>
        We offer you the easiest way to get your <br />
        materials printed without breaking a sweat!
      </Text>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(../img/design-hero.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
`;

const Heading = styled.h1`
  grid-area: 2 / 3 / 3 / 5;
  align-self: self-end;
  justify-self: center;

  text-transform: uppercase;
  letter-spacing: 0.5rem;
  animation: moveInBottom 0.5s ease-out 0.75s backwards;
`;

const Text = styled.p``;

export default DesignHero;
