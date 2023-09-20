'use client';

import styled from 'styled-components';

const Info = () => {
  return (
    <Container>
      <PhoneWrapper>
        x<PhoneNumber>+2348136119251</PhoneNumber>
      </PhoneWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: palevioletred;
`;

const PhoneWrapper = styled.div``;

const PhoneNumber = styled.span``;

export default Info;
