'use client';

import styled from 'styled-components';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

interface IContainer {
  center: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <Container center={center}>
      <HeadingPrimary>{title}</HeadingPrimary>
      <HeadingSecondary>{subtitle}</HeadingSecondary>
    </Container>
  );
};

const Container = styled.div<IContainer>``;

const HeadingPrimary = styled.h1``;

const HeadingSecondary = styled.h2``;

export default Heading;
