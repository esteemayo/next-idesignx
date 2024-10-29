import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--clr-gray-dark-2);
  margin-left: 2rem;
  margin-top: 0.7rem;

  @media only screen and (min-width: 112.5em) {
    font-size: var(--default-font-size);
  }

  @media only screen and (min-width: 125em) {
    font-size: 1.8rem;
  }
`;
