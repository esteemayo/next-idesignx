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

const Heading = styled.h1``;

const Text = styled.p``;

const Br = styled.br``;

export default ContactHero;
