'use client';

import { FC } from 'react';
import styled from 'styled-components';

import Card from './Card';
import { PrintItems } from '@/types';

interface PrintingsProps {
  data: PrintItems;
}

const Printings: FC<PrintingsProps> = ({ data }) => {
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
  background-image: linear-gradient(
      rgba(153, 153, 153, 0.5),
      rgba(153, 153, 153, 0.5)
    ),
    url(/img/woman/woman-2.jpg);
  color: var(--clr-white);
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

  @media only screen and (max-width: 18.75em) {
    font-size: 2.75rem;
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

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    justify-content: center;
  }
`;

export default Printings;
