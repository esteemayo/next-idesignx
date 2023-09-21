'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Input from './inputs/Input';
import TextArea from './inputs/TextArea';

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
        <FormGroup>
          <Select
            id='category'
            name='category'
            onChange={handleChange}
            required
          >
            <Option value=''>Select products</Option>
            <Option value='Logo Design'>Logo Design</Option>
            <Option value='Branding'>Branding</Option>
            <Option value='Product Packaging'>Product Packaging</Option>
            <Option value='Corporate Gifts'>Corporate Gifts</Option>
            <Option value='Custom Shirts'>Custom Shirts</Option>
            <Option value='Stationery Materials'>Stationery Materials</Option>
            <Option value='Signage'>Signage</Option>
            <Option value='Canvas Prints'>Canvas Prints</Option>
            <Option value='Fliers & Media prints'>Fliers & Media prints</Option>
            <Option value='Posters'>Posters</Option>
          </Select>
        </FormGroup>
        <TextArea
          name='content'
          label='Content'
          placeholder='Content'
          onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
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
  color: var(--clr-purple-light-3);
  line-height: 1;
`;

const Text = styled.p`
  color: var(--clr-purple-light-3);
`;

const Form = styled.form``;

const FormGroup = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--clr-gray-dark-2);
  margin-left: 2rem;
  margin-top: 0.7rem;
`;

const Select = styled.select`
  width: 100%;
  display: inline-block;
  border: none;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: var(--clr-white);
  color: var(--clr-gray-dark-2);
  border: 3px solid transparent;
  border-radius: 2px;
  outline-color: var(--clr-purple-light-3);

  &:focus {
    outline: none;
    border-bottom: 3px solid var(--clr-green);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
  }
`;

const Option = styled.option`
  font-size: 1.4rem;
  color: #bbb;
  letter-spacing: 0.5rem;
`;

// const TextArea = styled.textarea`
//   width: 100%;
//   display: inline-block;
//   border: none;
//   resize: none;
//   font-family: inherit;
//   font-size: 1.5rem;
//   padding: 2rem;
//   background-color: var(--clr-white);
//   color: var(--clr-gray-dark-2);
//   outline-color: var(--clr-purple-light-3);
//   caret-color: var(--clr-purple-light-3);
//   transition: all 0.3s;

//   &::placeholder {
//     font-size: 1.4rem;
//     color: var(--clr-gray-dark-2);
//   }

//   &:focus {
//     outline: none;
//     border-bottom: 3px solid var(--clr-green);
//     box-shadow: 0 0 1rem rgba(0, 0, 0, 0.07);
//   }

//   &:focus:invalid {
//     border-bottom: 3px solid var(--clr-orange-dark);
//   }

//   &:placeholder-shown + ${Label} {
//     opacity: 0;
//     visibility: hidden;
//     transform: translateY(-4rem);
//   }
// `;

const Button = styled.button`
  margin-top: 2rem;
  display: inline-block;
  border: none;
  text-transform: capitalize;
  padding: 1rem 3rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  color: var(--clr-white);
  border-radius: 0.5rem;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.75;
  }
`;

export default Contact;
