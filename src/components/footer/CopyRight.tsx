'use client';

import styled from 'styled-components';

interface CopyRightProps {
  value: string;
}

const CopyRight: React.FC<CopyRightProps> = ({ value }) => {
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
`;

const Year = styled.span``;

export default CopyRight;
