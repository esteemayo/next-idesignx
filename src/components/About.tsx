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

  @media only screen and (max-width: 50em) {
    grid-row: 4 / 5;
    grid-column: center-start / center-end;
    margin: 8rem 0;
  }

  background-color: var(--clr-white);
  margin: calc(16rem - 8rem) 0;
  color: var(--clr-gray-dark);
  padding: 1rem;
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 4rem;
  text-transform: capitalize;
  color: var(--clr-purple-light-1);
  line-height: 1;
  margin-bottom: 4rem;
`;

const Span = styled.span`
  display: block;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 6rem;
`;

export default About;
