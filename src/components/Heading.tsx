'use client';

import styled from 'styled-components';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

interface IContainer {
  center: boolean | undefined | null;
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
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin-bottom: 2rem;
`;

const HeadingPrimary = styled.h1`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 1.2;
`;

const HeadingSecondary = styled.h2`
  font-weight: 300;
  font-size: 1.7rem;
  color: rgba(115, 115, 115, 1);
  line-height: 1;
  margin-top: 0.8rem;
`;

export default Heading;
