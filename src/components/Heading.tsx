'use client';

import styled from 'styled-components';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: string;
}

interface IContainer {
  center: string | undefined | null;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <Container center={center}>
      <HeadingPrimary>{title}</HeadingPrimary>
      <HeadingSecondary>{subtitle}</HeadingSecondary>
    </Container>
  );
};

const Container = styled.div<IContainer>`
  text-align: ${({ center }) => setAlignment(center)};
  margin-bottom: 2rem;
`;

const HeadingPrimary = styled.h1`
  font-weight: 400;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.textSoft};
  line-height: 1.2;

  @media only screen and (max-width: 37.5em) {
    font-size: 2.2rem;
  }
`;

const HeadingSecondary = styled.h2`
  font-weight: 300;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.textSmall};
  line-height: 1;
  margin-top: 0.8rem;
`;

const setAlignment = (val: string | null | undefined): string => {
  return val === 'true' ? 'center' : 'left';
};

export default Heading;
