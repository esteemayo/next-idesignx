'use client';

import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Heading>Quick quote</Heading>
      <Text>Get anything Printed in no time!</Text>
      <Form>
        <FormGroup>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Your name'
            required
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
          />
          <Label htmlFor='email'>Your email</Label>
        </FormGroup>
        <FormGroup>
          <Select id='category' name='category' required>
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
      </Form>
    </Container>
  );
};

const Container = styled.section`
  background-color: crimson;
  grid-column: col-start 5 / col-end 8;
`;

const Heading = styled.h2``;

const Text = styled.p``;

const Form = styled.form``;

const FormGroup = styled.div``;

const Input = styled.input``;

const Label = styled.label``;

const Select = styled.select``;

const Option = styled.option``;

export default Contact;
