'use client';

import Image from 'next/image';
import styled from 'styled-components';

const StoryImage = () => {
  return <Container>StoryImage</Container>;
};

const Container = styled.section`
  grid-column: col-start 5 / full-end;
  background-color: greenyellow;
`;

const StyledImage = styled(Image)``;

export default StoryImage;
