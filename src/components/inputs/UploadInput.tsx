'use client';

import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';

const UploadInput = () => {
  return (
    <FormGroup>
      <Input id='file' type='file' />
    </FormGroup>
  );
};

const Input = styled.input``;

export default UploadInput;
