'use client';

import styled from 'styled-components';
import { StyledLink } from './buttons/StyledLink';

const About = () => {
  return (
    <Container>
      <Heading>
        We are all about <Span>xpressing brands</Span>
      </Heading>
      <Text>
        We are a Creative Design, Brand development and activation firm. We aim
        to present brands in grand style. Focusing on each drop in a massive
        rainfall is a way of life to us.
      </Text>
      <StyledLink href='/about'>About us</StyledLink>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 1 / col-end 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: transparent;
  margin: calc(16rem - 8rem) 0;
  color: ${({ theme }) => theme.textSoft};
  padding: 1rem;

  @media only screen and (max-width: 50em) {
    grid-row: 3 / 4;
    grid-column: center-start / center-end;
    margin: 8rem 0;
  }

  @media only screen and (max-width: 26.875em) {
    grid-column: full-start / full-end;
    padding: 0 3rem;
  }
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 4rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  line-height: 1;
  margin-bottom: 4rem;

  @media only screen and (max-width: 50em) {
    word-spacing: 1px;
    margin-bottom: 2.5rem;
  }

  @media only screen and (max-width: 26.875em) {
    font-size: 3.23rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 4.5rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 5rem;
  }
`;

const Span = styled.span`
  display: block;
`;

const Text = styled.p`
  font-size: 100%;
  margin-bottom: 6rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
    word-spacing: 1px;
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.9rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }
`;

export default About;
