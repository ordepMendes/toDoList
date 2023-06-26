import { ChangeEvent } from 'react';

type SearchType = {
  search: string;
  setSearch: (value: string) => void;
};

const Search: React.FC<SearchType> = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input
        placeholder='Digite aqui para pesquisar... '
        type="text"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;