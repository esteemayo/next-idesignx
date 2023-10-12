'use client';

import { FC } from 'react';
import styled from 'styled-components';

interface GalleryItemProps {
  img: string;
}

const GalleryItem: FC<GalleryItemProps> = ({ img }) => {
  return <Container>GalleryItem</Container>;
};

const Container = styled.figure`
  width: 100%;
  height: 100%;
`;

export default GalleryItem;
