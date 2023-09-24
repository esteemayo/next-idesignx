'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Button from './buttons/Button';
import Form from './form/Form';
import TextArea from './inputs/TextArea';
import Input from './inputs/Input';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log({ ...data });
    },
    [data]
  );

  return (
    <Container>
      <Heading>
        In case you have question, comments
        <Br />
        or just want to say hello.
      </Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          name='name'
          label='Your name'
          value={data.name}
          placeholder='Your name'
          onChange={handleChange}
        />
        <Input
          name='email'
          type='email'
          label='Your email'
          value={data.email}
          placeholder='Your email'
          onChange={handleChange}
        />
        <Input
          name='subject'
          label='Subject'
          value={data.subject}
          placeholder='Subject'
          onChange={handleChange}
        />
        <TextArea
          name='message'
          label='Message'
          value={data.message}
          placeholder='Message'
          onChange={handleChange}
        />
        <Button label='Submit' />
      </Form>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 1 / col-end 4;
  display: grid;
  justify-content: center;

  background-color: #f9f9f9;
  margin: 10rem 0;
  padding: 4.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 4rem rgba(00, 00, 00, 0.09);
`;

const Heading = styled.h3``;

const Br = styled.br``;

export default ContactForm;
