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
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.textDesign};
  margin-bottom: 2rem;

  @media only screen and (max-width: 25em) {
    font-size: 1.85rem;
    margin-bottom: 1.7rem;
  }
`;

export default Statement;
