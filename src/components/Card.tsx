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
  border-radius: 2px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.09);

  svg {
    font-size: 4.5rem;
    fill: var(--clr-white);
  }
`;

const Heading = styled.h5`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 1px;
`;

const Text = styled.p`
  font-size: 1.7rem;
  line-height: 1.3;
`;

const StyledLink = styled(Link)``;

export default Card;
