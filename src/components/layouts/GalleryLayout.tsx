'use client';

import styled from 'styled-components';

const GalleryLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 37vw repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 64em) {
    grid-template-rows: 42vw;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 45vw;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 50vw;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 55vw;
  }

  @media only screen and (max-width: 30em) {
    grid-template-rows: 60vw;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 65vw;
  }

  @media only screen and (max-width: 22.5em) {
    grid-template-rows: 70vw;
  }

  @media only screen and (max-width: 18.75em) {
    grid-template-rows: 75vw;
  }
`;

export default GalleryLayout;
