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
      <HeadingSecondaryLeft>
        <HeadingMain>Be assured</HeadingMain>
        <HeadingSub>Sample prints</HeadingSub>
      </HeadingSecondaryLeft>
      <HeadingSecondaryRight>
        <HeadingMain>Guaranteed</HeadingMain>
        <HeadingSub>5 days max</HeadingSub>
      </HeadingSecondaryRight>
    </Header>
  );
};

const Header = styled.header`
  grid-column: full-start / full-end;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/prints-hero.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const HeadingPrimary = styled.h1``;

const Text = styled.p``;

const Br = styled.br``;

const HeadingSecondaryLeft = styled.h2``;

const HeadingSecondaryRight = styled.h2``;

const HeadingMain = styled.span``;

const HeadingSub = styled.span``;

export default PrintHero;
