'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';

import { ImageUploadProps } from '@/types';
import { CommonImage } from '../common/CommonImage';

interface IContainer {
  error?: string;
}

const ImageUpload = ({ value, error, onChange }: ImageUploadProps) => {
  return (
    <Container error={error}>
      <Wrapper>
        <Label htmlFor='file'>
          <FontAwesomeIcon icon={faFileArrowUp} />
        </Label>
        <Input id='file' multiple onChange={onChange} />
      </Wrapper>
      {value.length > 0 && (
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

  @media only screen and (min-width: 106.25em) {
    height: 23rem;
  }

  @media only screen and (min-width: 112.5em) {
    height: 25rem;
  }

  @media only screen and (min-width: 125em) {
    height: 30rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 5rem;
    color: currentColor;

    @media only screen and (min-width: 106.25em) {
      font-size: 5.5rem;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: 6rem;
    }

    @media only screen and (min-width: 125em) {
      font-size: 7rem;
    }
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

const StyledImage = styled(CommonImage)`
  position: absolute;
  top: 0;
  left: 0;
`;

const setBorderColor = (error: string | undefined) => {
  return error === 'true' ? 'var(--clr-red)' : 'var(--clr-gray-dark-2)';
};

export default ImageUpload;
