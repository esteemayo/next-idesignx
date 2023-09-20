import Link from 'next/link';
import styled from 'styled-components';

const NavItem = () => {
  return (
    <Container>
      <Link href='/'>Home</Link>
    </Container>
  );
};

const Container = styled.li`
  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 300;
      font-size: 1.6rem;
      color: var(--clr-purple-light-3);
      outline-color: #eee;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: var(--clr-purple-light-2);
    }
  }
`;

export default NavItem;
