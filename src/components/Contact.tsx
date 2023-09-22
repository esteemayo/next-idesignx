'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Input from './inputs/Input';
import TextArea from './inputs/TextArea';
import Select from './inputs/Select';

import Form from './form/Form';
import Button from './buttons/Button';

import { selectInputs } from '@/formData';

const Contact = () => {
  const [data, setData] = useState({});

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLFormControlsCollection>) => {
      e.preventDefault();
      console.log({ ...data });
    },
    [data]
  );

  return (
    <Container>
      <Heading>Quick quote</Heading>
      <Text>Get anything Printed in no time!</Text>
      <Form onSubmit={handleSubmit}>
        <Input
          name='name'
          label='Your name'
          placeholder='Your name'
          onChange={handleChange}
        />
        <Input
          name='email'
          type='email'
          label='Your email'
          placeholder='Your email'
          onChange={handleChange}
        />
        <Select
          name='category'
          label='Select products'
          options={selectInputs}
          onChange={handleChange}
        />
        <TextArea
          name='content'
          label='Content'
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

// const Button = styled.button`
//   margin-top: 2rem;
//   display: inline-block;
//   border: none;
//   text-transform: capitalize;
//   padding: 1rem 3rem;
//   font-weight: 400;
//   font-size: 1.5rem;
//   background-image: linear-gradient(
//     to right bottom,
//     var(--clr-purple-dark-1),
//     var(--clr-purple-light-1),
//     var(--clr-purple-light-2),
//     var(--clr-purple-light-3)
//   );
//   color: var(--clr-white);
//   border-radius: 0.5rem;
//   outline-color: var(--clr-purple-light-3);
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     opacity: 0.9;
//   }

//   &:disabled {
//     opacity: 0.75;
//   }
// `;

export default Contact;
