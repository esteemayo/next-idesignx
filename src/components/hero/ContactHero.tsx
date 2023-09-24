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
  background-color: crimson;
`;

const Heading = styled.h1``;

const Text = styled.p``;

const Br = styled.br``;

export default ContactHero;
