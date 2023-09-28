'use client';

import styled from 'styled-components';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return <Container>Heading</Container>;
};

const Container = styled.div``;

const HeadingSecondary = styled.h1``;

export default Heading;
