import { useRef, useContext } from 'react';
import nprogress from 'nprogress';
import { AppContext } from './../contexts/AppContext';
import SearchForm from './../styles/components/search';

import 'nprogress/nprogress.css';

function Search() {
  const inputRef = useRef(null);
  const { changeIP, changeDomain } = useContext(AppContext);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { value } = inputRef.current;

    nprogress.start();

    if (isValidDomain(value)) {
      changeDomain(value);
      return;
    }

    if (isValidIPv4(value)) {
      changeIP(value);
      return;
    }

    nprogress.done();
    alert('Digite um IP (v4) ou domínio válido');
  }

  function isValidDomain(value: string) {
    return value.match(
      /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/g
    );
  }

  function isValidIPv4(value: string) {
    return value.match(
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g
    );
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for any IP address or domain"
      />
      <button type="submit">
        <img src="/images/icon-arrow.svg" alt="Search" />
      </button>
    </SearchForm>
  );
}

export default Search;
