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

  @media only screen and (max-width: 50em) {
    grid-template-rows: 47vw repeat(5, min-content);
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-rows: 50vw;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 55vw;
  }

  @media only screen and (max-width: 30em) {
    grid-template-rows: 60vw;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 65vw;
  }
`;

export default HomeLayout;
