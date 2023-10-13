'use client';

import styled from 'styled-components';

import TextArea from './inputs/TextArea';
import Select from './inputs/Select';
import FormInput from './inputs/FormInput';

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
        <FormInput
          name='name'
          type='text'
          label='Your name'
          value={data.name}
          placeholder='Your name'
          onChange={handleChange}
        />
        <FormInput
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
          value={data.category}
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
