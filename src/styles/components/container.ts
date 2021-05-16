import styled from 'styled-components';

const Container = styled.div`
  background-image: url('/images/pattern-bg.png');
  background-repeat: no-repeat;
  padding: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    background-size: contain;
  }
`;

export default Container;
