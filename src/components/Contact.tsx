'use client';

import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Heading>Quick quote</Heading>
      <Text>Get anything Printed in no time!</Text>
      <Form>
        <FormGroup>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Your name'
            required
          />
          <Label htmlFor='name'>Your name</Label>
        </FormGroup>
        <FormGroup>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='Your email'
            required
          />
          <Label htmlFor='email'>Your email</Label>
        </FormGroup>
        <FormGroup>
          <Select id='category' name='category' required></Select>
        </FormGroup>
      </Form>
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

const Input = styled.input``;

const Label = styled.label``;

const Select = styled.select``;

export default Contact;
