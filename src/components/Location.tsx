'use client';

import styled from 'styled-components';

import ContactDetail from './ContactDetail';
import SocialIcon from './icons/SocialIcon';

import { contactDetails } from '@/data';

const Location = () => {
  return (
    <Container>
      {contactDetails.map((item) => {
        return <ContactDetail key={item.id} {...item} />;
      })}
      <LogoBox>
        <SocialIcon icon='facebook' />
        <SocialIcon icon='twitter' />
        <SocialIcon icon='instagram' />
      </LogoBox>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / col-end 8;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.bgLoc};
  color: ${({ theme }) => theme.textSoft};
  margin: 15rem 0;
  padding: 5rem;
  line-height: 1.4;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  @media only screen and (max-width: 56.25em) {
    grid-row: 3 / 4;
    grid-column: center-start / center-end;

    margin: 5rem 0;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 31.25em) {
    margin-top: 3rem;
    padding: 4rem 3rem;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;

export default Location;
