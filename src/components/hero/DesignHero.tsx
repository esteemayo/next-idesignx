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

const Header = styled.header``;

const Heading = styled.h1``;

const Text = styled.p``;

export default DesignHero;
