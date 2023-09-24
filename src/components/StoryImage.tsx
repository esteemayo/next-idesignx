'use client';

import Image from 'next/image';
import styled from 'styled-components';

const StoryImage = () => {
  return (
    <Container>
      <StyledImage
        src='/img/story-pic-1.jpg'
        width={287}
        height={182}
        alt=''
        className='img-1'
      />
      <StyledImage
        src='/img/story-pic-2.jpg'
        width={287}
        height={182}
        alt=''
        className='img-2'
      />
      <StyledImage
        src='/img/story-pic-3.jpg'
        width={287}
        height={182}
        alt=''
        className='img-3'
      />
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / full-end;
  margin-top: 10rem;
  position: relative;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(11, 1fr);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  box-shadow: 0 0 4rem rgba(00, 00, 00, 0.09);
  z-index: 10;
  outline-offset: 2rem;

  &:hover {
    outline: 1.5rem solid var(--clr-purple-light-1);
    transform: scale(1.03) translate(-0.5rem);
    box-shadow: 0 1rem 4rem rgba(00, 00, 00, 0.09);
  }
`;

export default StoryImage;
