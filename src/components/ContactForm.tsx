'use client';

import styled from 'styled-components';

const ContactForm = () => {
  return (
    <Container>
      <Heading>
        In case you have question, comments
        <Br />
        or just want to say hello.
      </Heading>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 1 / col-end 4;
  background-color: #f9f9f9;
`;

const Heading = styled.h3``;

const Br = styled.br``;

export default ContactForm;
