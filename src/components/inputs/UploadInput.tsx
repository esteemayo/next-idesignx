'use client';

import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';

const UploadInput = () => {
  return (
    <Container>
      <Input id='file' type='file' />
      <Label htmlFor='file'>Attach a sample</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
`;

const Label = styled.label``;

export default UploadInput;
