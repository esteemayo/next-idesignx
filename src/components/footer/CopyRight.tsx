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

  @media only screen and (max-width: 37.5em) {
    width: 100%;
    font-size: 1.3rem;
    margin-top: 3rem;
  }
`;

const Year = styled.span``;

export default CopyRight;
