'use client';

import styled from 'styled-components';

import Input from './inputs/Input';
import TextArea from './inputs/TextArea';

import Form from './form/Form';
import Button from './buttons/Button';

import { useForm } from '@/hooks/useForm';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const onSubmitHandler = () => {
    console.log(data);
  };

  const { data, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState
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
          style='true'
          onChange={handleChange}
        />
        <Input
          name='email'
          type='email'
          label='Your email'
          value={data.email}
          placeholder='Your email'
          style='true'
          onChange={handleChange}
        />
        <Input
          name='subject'
          label='Subject'
          value={data.subject}
          placeholder='Subject'
          style='true'
          onChange={handleChange}
        />
        <TextArea
          name='message'
          label='Message'
          value={data.message}
          placeholder='Message'
          style='true'
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
  box-shadow: rgba(0, 0, 0, 0.09) 0 1px 0.5rem 0;
`;

const Heading = styled.h3`
  font-weight: lighter;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Br = styled.br``;

export default ContactForm;
