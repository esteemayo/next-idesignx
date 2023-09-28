'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';

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

const Wrapper = styled.div``;

const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2000;
`;

const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
