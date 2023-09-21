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
  line-height: 1.4;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  font-size: 1.4rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--clr-white);
  color: var(--clr-gray-dark-2);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--clr-gray-dark-2) 50%
  );
  background-size: 220%;
  border-radius: 3px;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--clr-white);
    background-position: 100%;
  }
`;

export default Card;
