'use client';

import styled from 'styled-components';

const Hero = () => {
  return (
    <Header>
      <Heading>
        <Text type='left'>You imagine.</Text>
        <Text type='right'>We print.</Text>
        <Text type='left'>
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

const Heading = styled.h1`
  grid-area: 2 / 1 / 3 / span 3;
  align-self: center;
  justify-self: center;

  text-transform: uppercase;
  font-weight: 400;
  font-size: 4.5rem;
  color: var(--clr-white);
  line-height: 1;
`;

const Text = styled.span`
  display: block;
  letter-spacing: 5px;
  line-height: 1.3;
`;

export default Hero;
