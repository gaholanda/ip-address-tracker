import styled from 'styled-components';

const EnvironmentDiv = styled.div`
  display: block;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.light};
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.3);
  font-weight: 700;
`;

export default EnvironmentDiv;
