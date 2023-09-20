'use client';

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

export default Info;
