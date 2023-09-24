'use client';

import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Text>
        Need a custom design and professional <Span>printing services?</Span>
      </Text>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  background-color: purple;
`;

const Text = styled.p``;

const Span = styled.span``;

export default Contact;
