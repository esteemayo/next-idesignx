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

  @media only screen and (max-width: 37.5em) {
    grid-column: full-start / full-end;
    margin: 5rem 2rem;
  }

  @media only screen and (max-width: 31.25em) {
    margin: 3rem 1rem;
  }

  @media only screen and (max-width: 20.63em) {
    margin: 2.5rem 0;
  }

  margin: 7rem 0;
`;

const Text = styled.p`
  font-size: 3.2rem;
  line-height: 1;

  @media only screen and (max-width: 62.5em) {
    font-size: 3rem;
  }
`;

const Span = styled.span`
  display: block;
`;

export default Contact;
