'use client';

import styled from 'styled-components';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <Container>
      <HeadingPrimary>{title}</HeadingPrimary>
    </Container>
  );
};

const Container = styled.div``;

const HeadingPrimary = styled.h1``;

const HeadingSecondary = styled.h2``;

export default Heading;
