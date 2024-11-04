'use client';

import styled from 'styled-components';

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 32vw min-content;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 64em) {
    grid-template-rows: 35vw min-content;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 60vh repeat(2, min-content);
  }

  @media only screen and (max-width: 50em) {
    grid-template-rows: 40vh;
  }

  @media only screen and (max-width: 31.25em) {
    grid-template-rows: 30vh;
  }
`;

export default ContactLayout;
