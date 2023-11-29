import styled from 'styled-components';

export const CommonHero = styled.header`
  color: var(--clr-white);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media only screen and (max-width: 25em) {
    background-attachment: scroll;
  }
`;
