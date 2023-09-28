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
`;

const HeadingPrimary = styled.h1`
  font-size: 2.4rem;
  line-height: 3.2rem;
`;

const HeadingSecondary = styled.h2``;

export default Heading;
