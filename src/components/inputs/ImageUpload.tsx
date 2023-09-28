'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent } from 'react';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

interface ImageUploadProps {
  files?: Array<object> | null | undefined;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ files, onChange }) => {
  return (
    <Container>
      <Wrapper>
        <Label htmlFor='file'>
          <FontAwesomeIcon icon={faFileArrowUp} />
        </Label>
        <Input
          id='file'
          type='file'
          multiple
          onChange={(e) => onChange(e.target.files)}
        />
      </Wrapper>
      {files && (
        <StyledImage
          src={URL.createObjectURL(files[0])}
          width={440}
          height={200}
          alt=''
        />
      )}
    </Container>
  );
};

const Spin = keyframes`
  to {
    border: 2px dashed #ccc;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #f9f9f9;
  color: var(--clr-gray-dark-2);
  border: 2px dashed var(--clr-gray-dark-2);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  animation: ${Spin} 1s linear infinite;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 5rem;
    color: currentColor;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2000;
`;

const Input = styled.input`
  display: none;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default ImageUpload;
