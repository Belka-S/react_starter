import { useState } from 'react';
import { Section } from '../Section/Section';
import { DataRequest } from '../Request/DataRequest';
import { SearchForm } from '../Request/SearchForm';

export const AppRequest = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <Section title="http-Request">
      <SearchForm onSearch={handleSearch} />
      <DataRequest searchQuery={searchQuery} />
    </Section>
  );
};
