'use client';

import styled from 'styled-components';

interface CopyRightProps {
  value: number;
}

const CopyRight = ({ value }: CopyRightProps) => {
  return (
    <Container>
      &copy; Copyright <Year>{value}</Year> by Emmanuel Adebayo. All rights
      reserved. We are a young company always looking for new and creative ideas
      to help you with our products in your everyday work.
    </Container>
  );
};

const Container = styled.p`
  width: 70%;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;
  color: currentColor;

  @media only screen and (max-width: 56.25em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 37.5em) {
    width: 100%;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 106.25em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }
`;

const Year = styled.span``;

export default CopyRight;
