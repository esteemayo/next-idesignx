'use client';

import { StyledLink } from '@/components/buttons/StyledLink';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Text>
        Need a custom design and professional <Span>printing services?</Span>
      </Text>
      <Wrapper>
        <StyledLink href='/contact'>Contact us</StyledLink>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  margin: 7rem 0;
`;

const Text = styled.p``;

const Span = styled.span``;

const Wrapper = styled.div``;

export default Contact;
