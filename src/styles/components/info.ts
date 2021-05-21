import styled from 'styled-components';

const Info = styled.ul`
  position: relative;
  top: -50px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.light};
  padding: 1rem 0;
  margin: auto;
  border-radius: 1rem;
  width: 100%;
  max-width: 1110px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.11);

  li {
    list-style: none;
    flex: 1;
    padding: 0 1.5rem;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 2rem 0 1rem;
    flex-direction: row;

    li {
      text-align: left;

      & + li:after {
        content: '';
        background: #d8d8d8;
        position: absolute;
        bottom: 32%;
        height: 45%;
        width: 1px;
        margin-left: -2rem;
      }
    }

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export default Info;
