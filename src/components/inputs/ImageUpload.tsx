'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

interface ImageUploadProps {
  value?: File;
  error?: string;
  onChange(e: FileList): void;
}

interface IContainer {
  error?: string;
}

const ImageUpload = ({ value, error, onChange }: ImageUploadProps) => {
  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      const selectedFile = files as FileList;
      onChange(selectedFile);
    },
    [onChange]
  );

  return (
    <Container error={error}>
      <Wrapper>
        <Label htmlFor='file'>
          <FontAwesomeIcon icon={faFileArrowUp} />
        </Label>
        <Input id='file' multiple onChange={handleFile} />
      </Wrapper>
      {value && (
        <StyledImage
          src={URL.createObjectURL(value[0])}
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
    border: 1px dashed #ccc;
  }
`;

const Container = styled.div<IContainer>`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.bgUpload};
  color: #cac7c7;
  border: 1px dashed ${({ error }) => setBorderColor(error)};
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
  position: relative;
  z-index: 2000;
  cursor: pointer;
`;

const Input = styled.input.attrs({
  type: 'file',
})`
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

const setBorderColor = (error: string | undefined) => {
  return error === 'true' ? 'var(--clr-red)' : 'var(--clr-gray-dark-2)';
};

export default ImageUpload;
