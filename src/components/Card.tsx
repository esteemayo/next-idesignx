'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CardProps } from '@/types';

const Card = ({ url, icon, desc, title }: CardProps) => {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} />
      <Heading>{title}</Heading>
      <Text>{desc}</Text>
      <StyledLink href={url}>Get started</StyledLink>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-rows: repeat(4, min-content);
  gap: 1.5rem;

  padding: 3rem;
  background-color: rgba(233, 233, 233, 0.1);
  border-radius: 2px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.09);

  @media only screen and (min-width: 112.5em) {
    width: 37rem;
  }

  @media only screen and (min-width: 125em) {
    width: 42rem;
  }

  svg {
    font-size: 4.5rem;
    color: var(--clr-white);

    @media only screen and (min-width: 112.5em) {
      font-size: 4.7rem;
    }

    @media only screen and (min-width: 125em) {
      font-size: 5rem;
    }
  }
`;

const Heading = styled.h5`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 1px;

  @media only screen and (min-width: 112.5em) {
    font-size: 2.2rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2.4rem;
  }
`;

const Text = styled.p`
  text-align: justify;
  font-size: 1.7rem;
  word-break: break-all;
  line-height: 1.4;

  @media only screen and (min-width: 112.5em) {
    font-size: 1.9rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2.1rem;
  }
`;

const StyledLink = styled(Link)`
  justify-self: start;

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
  backface-visibility: hidden;
  border-radius: 3px;
  outline-color: #f9f9f9;
  transition: all 0.3s;

  @media only screen and (min-width: 112.5em) {
    font-size: var(--default-font-size);
    padding: 1rem 3rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
    padding: 1.2rem 3rem;
  }

  &:hover,
  &:active {
    color: var(--clr-white);
    background-position: 100%;
  }
`;

export default Card;
