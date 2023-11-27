'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import FormInput from './inputs/FormInput';
import FormTextArea from './inputs/FormTextArea';

import Form from './form/Form';
import Button from './buttons/Button';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [data, setData] = useState(initialState);

  const { name, email, subject, message } = data;

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(data);
      setData(initialState);
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
        <FormInput
          name='name'
          type='text'
          label='Your name'
          value={name}
          placeholder='Your name'
          onChange={handleChange}
        />
        <FormInput
          name='email'
          type='email'
          label='Your email'
          value={email}
          placeholder='Your email'
          onChange={handleChange}
        />
        <FormInput
          name='subject'
          label='Subject'
          value={subject}
          placeholder='Subject'
          onChange={handleChange}
        />
        <FormTextArea
          name='message'
          label='Message'
          value={message}
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

  background-color: ${({ theme }) => theme.bgLighter};
  margin: 10rem 0;
  padding: 4.5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0 1px 0.5rem 0;

  @media only screen and (max-width: 56.25em) {
    grid-row: 2 / 3;
    grid-column: center-start / center-end;

    box-shadow: none;
    margin: 5rem 0;
  }

  @media only screen and (max-width: 31.25em) {
    margin: 2.5rem 0;
    padding: 4rem 2rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Heading = styled.h3`
  font-weight: lighter;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 2rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 2.35rem;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 2.25rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.8rem;
  }
`;

const Br = styled.br``;

export default ContactForm;
