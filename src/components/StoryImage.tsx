'use client';

import Image from 'next/image';
import styled from 'styled-components';

const StoryImage = () => {
  return (
    <Container>
      <StyledImage src='/img/story-pic-1.jpg' width={287} height={182} alt='' />
      <StyledImage src='/img/story-pic-2.jpg' width={287} height={182} alt='' />
      <StyledImage src='/img/story-pic-3.jpg' width={287} height={182} alt='' />
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / full-end;
  margin-top: 10rem;
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export default StoryImage;
