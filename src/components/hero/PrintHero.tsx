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

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: min-content repeat(3, 1fr);
  gap: 1.5rem;
`;

const HeadingPrimary = styled.h1`
  grid-area: 2 / 1 / 3 / -1;
  align-self: self-end;
  justify-self: center;

  text-transform: uppercase;
  font-weight: 400;
  font-size: 4.5rem;
  color: var(--clr-white);
  letter-spacing: 0.7rem;
  line-height: 1;
  animation: moveInTop 0.5s ease-out 0.75s backwards;
`;

const Text = styled.p`
  grid-area: 3 / 1 / 4 / -1;
`;

const Br = styled.br``;

const HeadingSecondaryLeft = styled.h2``;

const HeadingSecondaryRight = styled.h2``;

const HeadingMain = styled.span``;

const HeadingSub = styled.span``;

export default PrintHero;
