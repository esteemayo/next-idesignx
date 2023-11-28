import styled from 'styled-components';

interface IHeader {
  bcgImage: string;
}

export const CommonHeroBcg = styled.header<IHeader>`
  color: var(--clr-white);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(51, 51, 51, 0.7)
    ),
    url(bcgImage);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media only screen and (max-width: 25em) {
    background-attachment: scroll;
  }
`;
