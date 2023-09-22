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
  color: var(--clr-white);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(../img/design-hero.jpg);
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
`;

const Heading = styled.h1`
  grid-area: 2 / 3 / 3 / span 2;
  align-self: self-end;
  justify-self: center;

  text-transform: uppercase;
  font-weight: 400;
  font-size: 4.5rem;
  color: currentColor;
  letter-spacing: 0.5rem;
  animation: moveInBottom 0.5s ease-out 0.75s backwards;
`;

const Text = styled.p`
  grid-area: 3 / 3 / 4 / 5;
  align-self: self-start;
  justify-self: start;

  font-size: 2.5rem;
  color: currentColor;
  letter-spacing: 1px;
  text-align: center;
`;

export default DesignHero;
