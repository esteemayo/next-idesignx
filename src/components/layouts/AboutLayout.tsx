'use client';

import styled from 'styled-components';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 60vh 40vw min-content 20vw min-content;
  grid-template-columns:
    [full-start]minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 60vh min-content 30vw min-content 20vw min-content;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 40vh min-content 30vw min-content 20vw;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 30vh min-content 30vw min-content 20vw;
  }
`;

export default AboutLayout;
