'use client';

import styled from 'styled-components';

const ImageModal = () => {
  return <Overlay>ImageModal</Overlay>;
};

const Overlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.7);
  z-index: 5000;
`;

export default ImageModal;
