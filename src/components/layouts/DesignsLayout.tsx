'use client';

import styled from 'styled-components';

const DesignsLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bgDesign};
  display: grid;
  grid-template-rows: 42vw 40vw repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 47vw 45vw repeat(2, min-content);
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-rows: 50vw;
  }

  @media only screen and (max-width: 48em) {
    grid-template-rows: 55vw 50vw;
  }

  @media only screen and (max-width: 34.375em) {
    grid-template-rows: 60vw;
  }

  @media only screen and (max-width: 26.875em) {
    grid-template-rows: 75vw;
  }

  @media only screen and (max-width: 21.5em) {
    grid-template-rows: 80vw;
  }
`;

export default DesignsLayout;
