import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 550px;
  border-radius: 1rem;
  overflow: hidden;

  input {
    flex: 1;
    padding: 1.2rem 1rem;
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 1.125rem;
  }

  button {
    cursor: pointer;
    padding: 1rem 1.5rem;
    border: none;
    background-color: ${(props) => props.theme.colors.dark};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default SearchForm;
