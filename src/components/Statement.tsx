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
  background-color: var(--clr-white);
  text-align: center;
  padding: 4rem 0;
`;

const Paragraph = styled.p``;

export default Statement;
