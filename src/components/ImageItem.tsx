'use client';

import { FC } from 'react';
import styled from 'styled-components';

interface ImageItemProps {
  src: string;
}

const ImageItem: FC<ImageItemProps> = ({ src }) => {
  return <Container>ImageItem</Container>;
};

const Container = styled.figure`
  cursor: pointer;
`;

export default ImageItem;
