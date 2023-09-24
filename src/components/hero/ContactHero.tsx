'use client';

import styled from 'styled-components';

const ContactHero = () => {
  return (
    <Header>
      <Heading>Contact us</Heading>
      <Text>
        Get in touch with us and let&apos;s <Br /> get the ball rolling
      </Text>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;

  color: var(--clr-white);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(../img/contact-hero.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Heading = styled.h1`
  grid-area: 2 / 2 / 3 / span 4;
  align-self: self-end;
  justify-self: center;

  font-weight: 400;
  font-size: 4.5rem;
  text-transform: uppercase;
  letter-spacing: 0.7rem;
  line-height: 1;
  animation: moveInBottom 0.5s ease-out 0.75s backwards;
`;

const Text = styled.p`
  grid-area: 3 / 2 / 4 / span 4;
  align-self: self-start;
  justify-self: center;
`;

const Br = styled.br``;

export default ContactHero;
