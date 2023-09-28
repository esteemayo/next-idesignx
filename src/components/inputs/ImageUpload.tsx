'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';

const ImageUpload = () => {
  return (
    <Container>
      <Label htmlFor='file'>
        <FontAwesomeIcon icon={faFileArrowUp} />
      </Label>
      <Input id='file' type='file' multiple />
      <StyledImage src='' width={440} height={200} alt='' />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #f9f9f9;
  color: var(--clr-gray-dark-2);
  border: 2px dashed var(--clr-gray-dark-2);
  border-radius: 2px;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 5rem;
    color: currentColor;
  }
`;

const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

const StyledImage = styled(Image)``;

export default ImageUpload;
