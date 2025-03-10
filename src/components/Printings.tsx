'use client';

import styled from 'styled-components';

import Card from './Card';
import { PrintingsProps } from '@/types';

const Printings = ({ data }: PrintingsProps) => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          We produce the best <Bold>printing</Bold>
          <Span>
            and <Bold>design</Bold> services
          </Span>
        </Heading>
        <Box>
          {data.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;
  margin-bottom: 7rem;
`;

const Wrapper = styled.div`
  padding: 10rem 7rem;
  background-color: ${({ theme }) => theme.bgImg};
  color: var(--clr-white);
  background-image: linear-gradient(
      rgba(153, 153, 153, 0.5),
      rgba(153, 153, 153, 0.5)
    ),
    url(/img/woman/woman-2.jpg);
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 37.5em) {
    padding: 4rem;
  }

  @media only screen and (max-width: 25em) {
    padding: 3rem;
  }
`;

const Heading = styled.h4`
  font-weight: 400;
  font-size: 3rem;
  text-transform: none;
  line-height: 1.1;

  @media only screen and (max-width: 56.25em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.25rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 3.25rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 4rem;
  }
`;

const Bold = styled.b``;

const Span = styled.span`
  display: block;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, min-content));
  gap: 6rem;
  margin: 5rem 0;

  @media only screen and (max-width: 40.625em) {
    gap: 5rem;
  }

  @media only screen and (max-width: 37.5em) {
    gap: 4rem;
  }

  @media only screen and (max-width: 36.875em) {
    gap: 0;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    justify-content: center;
  }

  @media only screen and (max-width: 32.5em) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export default Printings;
