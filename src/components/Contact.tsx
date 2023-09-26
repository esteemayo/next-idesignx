'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Input from './inputs/Input';
import TextArea from './inputs/TextArea';
import Select from './inputs/Select';

import Form from './form/Form';
import Button from './buttons/Button';

import { useForm } from '@/hooks/useForm';
import { selectInputs } from '@/formData';

const initialState = {
  name: '',
  email: '',
  category: '',
  content: '',
};

const Contact = () => {
  // const [data, setData] = useState({});

  // const handleChange = useCallback(({ target: input }) => {
  //   const { name, value } = input;
  //   setData((prev) => ({ ...prev, [name]: value }));
  // }, []);

  // const handleSubmit = useCallback(
  //   (e: React.MouseEvent<HTMLFormControlsCollection>) => {
  //     e.preventDefault();
  //     console.log({ ...data });
  //   },
  //   [data]
  // );

  const onSubmitHandler = () => {
    console.log({ ...data });
  };

  const { data, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState
  );

  return (
    <Container>
      <Heading>Quick quote</Heading>
      <Text>Get anything Printed in no time!</Text>
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
        <Select
          name='category'
          label='Select products'
          value={data.categorye}
          options={selectInputs}
          onChange={handleChange}
        />
        <TextArea
          name='content'
          label='Content'
          value={data.content}
          placeholder='Content'
          onChange={handleChange}
        />
        <Button label='Submit' />
      </Form>
    </Container>
  );
};

const Container = styled.section`
  background-color: #f9f9f9;
  grid-column: col-start 5 / col-end 8;
  margin: 8rem;
  transform: translateY(-28rem);
  padding: 3rem;
  box-shadow: 0 0 4rem rgba(00, 00, 00, 0.09);
  border-radius: 1rem;

  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 1rem;
  align-content: start;
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  text-transform: capitalize;
  color: var(--clr-purple-light-1);
  line-height: 1;
`;

const Text = styled.p`
  color: var(--clr-purple-light-1);
`;

export default Contact;
