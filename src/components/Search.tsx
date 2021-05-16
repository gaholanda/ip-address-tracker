import SearchForm from './../styles/components/search';

function Search() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for any IP address or domain" />
      <button type="submit">
        <img src="/images/icon-arrow.svg" alt="Search" />
      </button>
    </SearchForm>
  );
}

export default Search;
