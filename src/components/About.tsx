'use client';

import Link from 'next/link';
import styled from 'styled-components';

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
  background-color: var(--clr-white);
  grid-column: col-start 1 / col-end 4;
  margin: calc(16rem - 8rem) 0;
  color: var(--clr-gray-dark);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 4rem;
  text-transform: capitalize;
  color: var(--clr-purple-light-3);
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

const StyledLink = styled(Link)`
  display: inline-block;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  padding: 1rem 3rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
`;

export default About;
