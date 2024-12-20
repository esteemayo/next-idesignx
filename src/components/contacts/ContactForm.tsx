'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import FormInput from '../inputs/FormInput';
import FormTextArea from '../inputs/FormTextArea';

import Form from '../form/Form';
import Button from '../buttons/Button';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [data, setData] = useState(initialState);

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

  const { name, email, subject, message } = data;

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
  box-shadow: 0px 3px 5px -2px rgba(73, 73, 73, 0.16);

  @media only screen and (max-width: 68.75em) {
    padding: 4rem;
  }

  @media only screen and (max-width: 64em) {
    grid-row: 2 / 3;
    grid-column: col-start 2 / col-end 7;
    justify-content: stretch;

    box-shadow: none;
    margin: 10rem 0 5rem;
  }

  @media only screen and (max-width: 59.375em) {
    grid-column: col-start 3 / col-end 6;
    margin: 7rem 0 3.5rem;
  }

  @media only screen and (max-width: 45em) {
    grid-column: col-start 2 / col-end 7;
    padding: 3.5rem;
  }

  @media only screen and (max-width: 34.375em) {
    grid-column: col-start 1 / col-end 8;
  }

  @media only screen and (max-width: 31.25em) {
    padding: 2.5rem;
  }

  @media only screen and (max-width: 30em) {
    margin: 6rem 0 3rem;
  }

  @media only screen and (max-width: 27.5em) {
    padding: 2rem;
  }

  @media only screen and (max-width: 26.875em) {
    grid-column: full-start / full-end;
    margin: 5rem 3rem 2.5rem;
  }

  @media only screen and (max-width: 23.4375em) {
    margin: 5rem 2.5rem 2.5rem;
  }

  @media only screen and (max-width: 18.75em) {
    margin: 4rem 2rem 2rem;
    padding: 1.5rem;
  }

  @media only screen and (max-width: 18.125em) {
    margin: 3rem 1.5rem 1.5rem;
  }
`;

const Heading = styled.h3`
  font-weight: lighter;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 2rem;

  @media only screen and (max-width: 64em) {
    font-size: 2.1rem;
  }

  @media only screen and (max-width: 62.5em) {
    font-size: 1.85rem;
  }

  @media only screen and (max-width: 57.5em) {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.7rem;
  }

  @media only screen and (max-width: 43.75em) {
    line-height: 1.1;
  }

  @media only screen and (max-width: 35.6875em) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.25rem;
  }

  @media only screen and (max-width: 30em) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 26.875em) {
    font-size: 2.15rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 2.25rem;
  }

  @media only screen and (max-width: 23.875em) {
    font-size: 2.15rem;
  }

  @media only screen and (max-width: 22.5em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 21.5em) {
    font-size: 1.85rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 16.875em) {
    font-size: 1.65rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 2.6rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 2.8rem;
    line-height: 1.3;
  }

  @media only screen and (min-width: 125em) {
    font-size: 3rem;
  }
`;

const Br = styled.br``;

export default ContactForm;
