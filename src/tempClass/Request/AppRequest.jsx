import { Component } from 'react';
import { Section } from '../Section/Section';
import { DataRequest } from '../Request/DataRequest';
import { SearchForm } from '../Request/SearchForm';

export class AppRequest extends Component {
  state = {
    searchQuery: '',
  };

  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <Section title="http-Request">
        <SearchForm onSearch={this.handleSearch} />
        <DataRequest searchQuery={this.state.searchQuery} />
      </Section>
    );
  }
}
