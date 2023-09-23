'use client';

import styled from 'styled-components';
import { StyledLink } from './buttons/StyledLink';

interface StatementProps {
  bg?: boolean;
}

const Statement: React.FC<StatementProps> = ({ bg }) => {
  return (
    <Container bg={bg}>
      <Paragraph>
        Need a custom design and professional printing
        <br /> services?
      </Paragraph>
      <StyledLink href='/contact'>Contact us</StyledLink>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;
  background-color: var(--clr-white);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/contact-1.jpg);
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 4rem 0;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export default Statement;
