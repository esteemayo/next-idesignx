'use client';

import styled from 'styled-components';

import { StyledLink } from './buttons/StyledLink';

const Statement = () => {
  return (
    <Container>
      <Paragraph>
        Need a custom design and professional printing
        <br /> services?
      </Paragraph>
      <StyledLink href='/contact'>Contact us</StyledLink>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;

  background-color: ${({ theme }) => theme.bgState};
  text-align: center;
  padding: 4rem 0;

  @media only screen and (max-width: 75em) {
    padding: 3rem 0;
  }

  @media only screen and (min-width: 106.25em) {
    padding: 4.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    padding: 5rem;
  }

  @media only screen and (min-width: 125em) {
    padding: 6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.textDesign};
  margin-bottom: 2rem;

  @media only screen and (max-width: 25em) {
    font-size: 1.85rem;
    margin-bottom: 1.7rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 3rem;
  }
`;

export default Statement;
