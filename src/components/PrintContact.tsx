'use client';

import styled from 'styled-components';

const PrintContact = () => {
  return <Container>PrintContact</Container>;
};

const Container = styled.section`
  grid-column: full-start / full-end;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(/img/contact-1.jpg);
  background-size: cover;
  background-position: center;
`;

const Paragraph = styled.p``;

export default PrintContact;
