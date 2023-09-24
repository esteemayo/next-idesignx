'use client';

import styled from 'styled-components';

const ContactHero = () => {
  return (
    <Header>
      <Heading>Contact us</Heading>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  background-color: crimson;
`;

const Heading = styled.h1``;

export default ContactHero;
