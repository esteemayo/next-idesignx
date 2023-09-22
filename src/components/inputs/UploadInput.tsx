'use client';

import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';

const UploadInput = () => {
  return (
    <FormGroup>
      <Input id='file' type='file' />
      <Label htmlFor='file'>Attach a sample</Label>
    </FormGroup>
  );
};

const Container = styled.div``;

const Input = styled.input``;

const Label = styled.label``;

export default UploadInput;
