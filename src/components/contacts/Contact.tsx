'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import FormSelect from '../inputs/FormSelect';
import FormInput from '../inputs/FormInput';
import FormTextArea from '../inputs/FormTextArea';

import Form from '../form/Form';
import Button from '../buttons/Button';

import { selectInputs } from '@/data/formData';

const initialState = {
  name: '',
  email: '',
  category: '',
  content: '',
};

const Contact = () => {
  const [data, setData] = useState(initialState);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log({ ...data });
      setData(initialState);
    },
    [data]
  );

  const { name, email, category, content } = data;

  return (
    <Container>
      <Heading>Quick quote</Heading>
      <Text>Get anything Printed in no time!</Text>
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
        <FormSelect
          name='category'
          label='Select products'
          value={category}
          options={selectInputs}
          onChange={handleChange}
        />
        <FormTextArea
          name='content'
          label='Content'
          value={content}
          placeholder='Content'
          onChange={handleChange}
        />
        <Button label='Submit' />
      </Form>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / col-end 8;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 1rem;
  align-content: start;

  background-color: ${({ theme }) => theme.bgLighter};
  margin: 8rem;
  transform: translateY(-28rem);
  padding: 3rem;
  box-shadow: 0 0 4rem rgba(0, 0, 0, 0.09);
  box-shadow: rgba(0, 0, 0, 0.09) 0 1px 0.5rem 0;
  border-radius: 1rem;

  @media only screen and (max-width: 50em) {
    grid-row: 5 / 6;
    grid-column: center-start / center-end;
    transform: translate(0);
    box-shadow: none;
    margin: 3rem 0;
  }

  @media only screen and (max-width: 31.25em) {
    margin-top: 7rem;
    margin-bottom: 10rem;
  }

  @media only screen and (max-width: 25em) {
    grid-column: full-start / full-end;
  }

  @media only screen and (min-width: 112.5em) {
    margin: 8rem 6rem;
  }

  @media only screen and (min-width: 125em) {
    margin: 8rem 4rem;
  }
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  line-height: 1;

  @media only screen and (max-width: 18.75em) {
    font-size: 2.5rem;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text};
`;

export default Contact;
