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
    grid-template-rows: 45vw 40vw min-content 22vw min-content;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 47vw 40vw min-content min-content 23vw min-content;
  }

  @media only screen and (max-width: 50em) {
    grid-template-rows: 50vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-rows: 53vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 55vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 57vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 30em) {
    grid-template-rows: 60vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 26.875em) {
    grid-template-rows: 65vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 70vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 22.5em) {
    grid-template-rows: 73vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 21.5em) {
    grid-template-rows: 75vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 18.75em) {
    grid-template-rows: 78vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (max-width: 17.5em) {
    grid-template-rows: 80vw 40vw min-content min-content 24vw min-content;
  }

  @media only screen and (min-width: 106.25em) {
    grid-template-rows: 38vw 40vw min-content 20vw min-content;
  }

  @media only screen and (min-width: 112.5em) {
    grid-template-rows: 39vw 40vw min-content 20vw min-content;
  }

  @media only screen and (min-width: 125em) {
    grid-template-rows: 40vw 40vw min-content 20vw min-content;
  }
`;

export default AboutLayout;
