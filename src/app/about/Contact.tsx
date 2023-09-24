'use client';

import { StyledLink } from '@/components/buttons/StyledLink';
import styled from 'styled-components';

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
  margin: 7rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 3.2rem;
  line-height: 1;
`;

const Span = styled.span`
  display: block;
`;

export default Contact;
