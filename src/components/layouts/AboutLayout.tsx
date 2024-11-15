'use client';

import styled from 'styled-components';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 37vw 40vw min-content 20vw min-content;
  grid-template-columns:
    [full-start]minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 64em) {
    grid-template-rows: 43vw 40vw min-content 20vw min-content;
  }

  @media only screen and (max-width: 59.375em) {
    grid-template-rows: 45vw 47vw min-content 22vw min-content;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 47vw min-content 45vw min-content 23vw min-content;
  }

  @media only screen and (max-width: 50em) {
    grid-template-rows: 50vw min-content 47vw min-content 24vw min-content;
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-rows: 53vw min-content 47vw min-content 30vw min-content;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 55vw min-content 47vw min-content 33vw min-content;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 57vw min-content 47vw min-content 37vw min-content;
  }

  @media only screen and (max-width: 30em) {
    grid-template-rows: 60vw min-content 47vw min-content 40vw min-content;
  }

  @media only screen and (max-width: 26.875em) {
    grid-template-rows: 65vw min-content 47vw min-content 43vw min-content;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 70vw min-content 47vw min-content 45vw min-content;
  }

  @media only screen and (max-width: 22.5em) {
    grid-template-rows: 73vw min-content 47vw min-content 48vw min-content;
  }

  @media only screen and (max-width: 21.5em) {
    grid-template-rows: 75vw min-content 47vw min-content 50vw min-content;
  }

  @media only screen and (max-width: 18.75em) {
    grid-template-rows: 78vw min-content 47vw min-content 53vw min-content;
  }

  @media only screen and (max-width: 17.5em) {
    grid-template-rows: 80vw min-content 47vw min-content 57vw min-content;
  }

  @media only screen and (min-width: 106.25em) {
    grid-template-rows: 38vw min-content 40vw 20vw min-content;
  }

  @media only screen and (min-width: 112.5em) {
    grid-template-rows: 39vw 40vw min-content 20vw min-content;
  }

  @media only screen and (min-width: 125em) {
    grid-template-rows: 40vw 40vw min-content 20vw min-content;
  }
`;

export default AboutLayout;
