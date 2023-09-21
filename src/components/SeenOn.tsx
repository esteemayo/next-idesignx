'use client';

import Image from 'next/image';
import styled from 'styled-components';

const SeenOn = () => {
  return (
    <Container>
      <Text>As seen on</Text>
      <LogoContainer>
        <StyledImage
          src='/img/access.jpg'
          width={60}
          height={50}
          alt=''
        />
        <StyledImage
          src='/img/Stanbic-Bank-Logo.jpg'
          width={60}
          height={50}
          alt=''
        />
        <StyledImage
          src='/img/zenith.png'
          width={60}
          height={50}
          alt=''
        />
        <StyledImage
          src='/img/union-bank.jpg'
          width={60}
          height={50}
          alt=''
        />
        <StyledImage
          src='/img/first-bank.png'
          width={60}
          height={50}
          alt=''
        />
      </LogoContainer>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  background-color: var(--clr-white);
  margin-top: -14rem;
`;

const Text = styled.div``;

const LogoContainer = styled.div``;

const StyledImage = styled(Image)``;

export default SeenOn;
