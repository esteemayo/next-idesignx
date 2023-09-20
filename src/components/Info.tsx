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
  background-color: palevioletred;
`;

const PhoneWrapper = styled.div``;

const PhoneNumber = styled.span``;

const EmailWrapper = styled.div``;

const EmailAddress = styled.span``;

const SocialWrapper = styled.div``;

const StyledLink = styled(Link)``;

export default Info;
