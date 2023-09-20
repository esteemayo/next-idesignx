'use client';

import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Heading>Quick quote</Heading>
      <Text>Get anything Printed in no time!</Text>
      <Form></Form>
    </Container>
  );
};

const Container = styled.section`
  background-color: crimson;
  grid-column: col-start 5 / col-end 8;
`;

const Heading = styled.h2``;

const Text = styled.p``;

const Form = styled.form``;

const FormGroup = styled.div``;

export default Contact;
