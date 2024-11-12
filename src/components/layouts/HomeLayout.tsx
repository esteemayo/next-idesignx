'use client';

import styled from 'styled-components';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 42vw repeat(4, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 64em) {
    grid-template-rows: 48vw repeat(5, min-content);
  }

  @media only screen and (max-width: 59.375em) {
    grid-template-rows: 49vw repeat(5, min-content);
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 51vw repeat(5, min-content);
  }

  @media only screen and (max-width: 50em) {
    grid-template-rows: 54vw;
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-rows: 57vw;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 59vw;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 61vw;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 63vw;
  }

  @media only screen and (max-width: 30em) {
    grid-template-rows: 65vw;
  }

  @media only screen and (max-width: 26.875em) {
    grid-template-rows: 75vw;
  }

  @media only screen and (max-width: 21.5em) {
    grid-template-rows: 80vw;
  }

  @media only screen and (min-width: 106.25em) {
    grid-template-rows: 43vw;
  }

  @media only screen and (min-width: 112.5em) {
    grid-template-rows: 44vw;
  }

  @media only screen and (min-width: 125em) {
    grid-template-rows: 45vw;
  }
`;

export default HomeLayout;
