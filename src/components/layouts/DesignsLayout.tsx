'use client';

import styled from 'styled-components';

const DesignsLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bgDesign};
  display: grid;
  grid-template-rows: 37vw 40vw repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 64em) {
    grid-template-rows: 43vw 40vw repeat(2, min-content);
  }

  @media only screen and (max-width: 59.375em) {
    grid-template-rows: 45vw 40vw repeat(2, min-content);
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 47vw 45vw repeat(2, min-content);
  }

  @media only screen and (max-width: 48em) {
    grid-template-rows: 50vw 50vw;
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-rows: 53vw 55vw;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 55vw 60vw;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 57vw 65vw;
  }

  @media only screen and (max-width: 30em) {
    grid-template-rows: 60vw 70vw;
  }

  @media only screen and (max-width: 26.875em) {
    grid-template-rows: 65vw 80vw;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 70vw 80vw;
  }

  @media only screen and (max-width: 21.5em) {
    grid-template-rows: 80vw;
  }
`;

export default DesignsLayout;
