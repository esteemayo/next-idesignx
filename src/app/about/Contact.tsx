'use client';

import styled from 'styled-components';

import { StyledLink } from '@/components/buttons/StyledLink';

const Contact = () => {
  return (
    <Container>
      <Text>
        Need a custom design and professional <Span>printing services?</Span>
      </Text>
      <StyledLink href='/contact'>Contact us</StyledLink>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7rem 0;

  @media only screen and (max-width: 56.25em) {
    margin: 8rem 0;
  }

  @media only screen and (max-width: 50em) {
    margin: 9rem 0;
  }

  @media only screen and (max-width: 34.375em) {
    margin: 10rem 0;
  }

  @media only screen and (max-width: 28.125em) {
    grid-column: full-start / full-end;
    padding: 0 3rem;
  }

  @media only screen and (max-width: 25em) {
    margin: 8rem 0;
    padding: 0 2rem;
  }

  @media only screen and (max-width: 21.875em) {
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 20.63em) {
    margin: 6rem 0;
  }

  @media only screen and (min-width: 106.25em) {
    margin: 8rem 0;
  }

  @media only screen and (min-width: 112.5em) {
    margin: 9rem 0;
  }

  @media only screen and (min-width: 125em) {
    margin: 10rem 0;
  }
`;

const Text = styled.p`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.textSoft};
  line-height: 1;

  @media only screen and (max-width: 56.25em) {
    font-size: 3.3rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 3.4rem;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 40.625em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.25rem;
  }

  @media only screen and (max-width: 33.125em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 30em) {
    font-size: 1.85rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 21.875em) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.35rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 3.4rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 3.6rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 3.8rem;
  }
`;

const Span = styled.span`
  display: block;
`;

export default Contact;
