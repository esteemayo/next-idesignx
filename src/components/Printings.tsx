'use client';

import styled from 'styled-components';

import Card from './Card';
import { printItems } from '@/data';

const Printings = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          We produce the best <Bold>printing</Bold>
          <span>
            and <Bold>design</Bold> services
          </span>
        </Heading>
        <Box>
          {printItems.map((item) => {
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
    url(../img/woman-2.jpg);
  color: var(--clr-white);
  background-size: cover;
  background-position: center;
`;

const Heading = styled.h4`
  font-weight: 400;
  font-size: 3rem;
  text-transform: none;
  line-height: 1.1;

  span {
    display: block;
  }
`;

const Bold = styled.b``;

const Span = styled.span``;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, min-content));
  gap: 6rem;
  margin: 5rem 0;
`;

export default Printings;
