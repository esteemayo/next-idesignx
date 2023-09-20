'use client';

import { useCallback, useState } from 'react';
import styled from 'styled-components';

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
        <FormGroup>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Your name'
            required
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <Label htmlFor='email'>Your email</Label>
        </FormGroup>
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
        <FormGroup>
          <TextArea
            id='content'
            name='content'
            onChange={handleChange}
            required
          />
        </FormGroup>
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
`;

const Heading = styled.h2``;

const Text = styled.p``;

const Form = styled.form``;

const FormGroup = styled.div``;

const Input = styled.input``;

const Label = styled.label``;

const Select = styled.select``;

const Option = styled.option``;

const TextArea = styled.textarea``;

const Button = styled.button``;

export default Contact;
