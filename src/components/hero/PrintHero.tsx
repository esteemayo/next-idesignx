'use client';

import styled from 'styled-components';

const PrintHero = () => {
  return (
    <Header>
      <HeadingPrimary>Print</HeadingPrimary>
      <Text>
        We offer you the easiest way to get your <Br />
        materials printed without breaking a sweat!
      </Text>
      <HeadingSecondary>
        <HeadingMain>Be assured</HeadingMain>
        <HeadingSub>Sample prints</HeadingSub>
      </HeadingSecondary>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  background-color: crimson;
`;

const HeadingPrimary = styled.h1``;

const Text = styled.p``;

const Br = styled.br``;

const HeadingSecondary = styled.h2``;

const HeadingMain = styled.span``;

const HeadingSub = styled.span``;

export default PrintHero;
