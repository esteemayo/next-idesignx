'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Info = () => {
  return (
    <Container>
      <PhoneWrapper>
        x<PhoneNumber>+2348136119251</PhoneNumber>
      </PhoneWrapper>
      <EmailWrapper>
        x<EmailAddress>esteemdesign19@gmail.com</EmailAddress>
      </EmailWrapper>
      <SocialWrapper>
        <StyledLink href='#'>icon</StyledLink>
        <StyledLink href='#'>icon</StyledLink>
        <StyledLink href='#'>icon</StyledLink>
      </SocialWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-image: linear-gradient(
    to right bottom,
    var(--color-pink-dark),
    var(--color-pink-light),
    var(--color-orange-dark),
    var(--color-orange-light)
  );
  font-size: 1.4rem;
  padding: 1rem;
  color: var(--color-white);

  display: grid;
  grid-template-columns: repeat(2, max-content) minmax(min-content, 1fr);
  gap: 6rem;
  align-items: center;
  justify-items: center;
`;

const PhoneWrapper = styled.div`
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PhoneNumber = styled.span``;

const EmailWrapper = styled.div`
  grid-column: 2 / 3;
`;

const EmailAddress = styled.span``;

const SocialWrapper = styled.div`
  align-self: center;
  justify-self: end;
  /* width: 1.3rem;
  height: 1.3rem; */
  margin-right: 0.5rem;
`;

const StyledLink = styled(Link)``;

export default Info;
