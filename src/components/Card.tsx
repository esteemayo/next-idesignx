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
      <StyledLink href='#'>Get started</StyledLink>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  gap: 1.5rem;

  padding: 3rem;
  background-color: rgba(233, 233, 233, 0.1);
`;

const Heading = styled.h5``;

const Text = styled.p``;

const StyledLink = styled(Link)``;

export default Card;
