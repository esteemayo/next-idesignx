'use client';

import styled from 'styled-components';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 32vw 40vw min-content 20vw min-content;
  grid-template-columns:
    [full-start]minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 64em) {
    grid-template-rows: 35vw min-content 30vw min-content 23vw;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 40vw min-content 30vw min-content 23vw;
  }

  @media only screen and (max-width: 50em) {
    grid-template-rows: 43vw min-content 30vw min-content 25vw;
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-rows: 45vw min-content 30vw min-content 25vw;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 47vw min-content 30vw min-content 27vw;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 50vw min-content 30vw min-content 30vw;
  }

  @media only screen and (max-width: 30em) {
    grid-template-rows: 55vw min-content 30vw min-content 35vw;
  }

  @media only screen and (max-width: 26.875em) {
    grid-template-rows: 57vw min-content 30vw min-content 40vw;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 63vw min-content 30vw min-content 43vw;
  }

  @media only screen and (max-width: 23.4375em) {
    grid-template-rows: 65vw min-content 30vw min-content 43vw;
  }

  @media only screen and (max-width: 22.5em) {
    grid-template-rows: 67vw min-content 30vw min-content 43vw;
  }

  @media only screen and (max-width: 21.5em) {
    grid-template-rows: 70vw min-content 30vw min-content 45vw;
  }
`;

export default AboutLayout;
