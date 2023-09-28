'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';

const ImageUpload = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faFileArrowUp} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #f9f9f9;
  color: var(--clr-gray-dark-2);
  border-radius: 2px;
  position: relative;
`;

export default ImageUpload;
