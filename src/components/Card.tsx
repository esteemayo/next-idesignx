'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Card = () => {
  return (
    <Container>
      icon
      <Heading>Print</Heading>
      <Text>
        Lorem ipsum dolor sit amet, loremisps adipiscing elit. Repellendus quia
        nostrum placeat.
      </Text>
    </Container>
  );
};

const Container = styled.article``;

const Heading = styled.h5``;

const Text = styled.p``;

const StyledLink = styled(Link)``;

export default Card;
