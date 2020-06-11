import React from 'react';
import { FormControl } from 'react-bootstrap';
import searchImg from '../../../images/search.svg';

const SearchInput = () => {
  return (
    <div className="search-input">
      <span>
        <img alt='' src={searchImg} />
      </span>
      <FormControl type="text" placeholder="Search" />
    </div>
  );
};

export default SearchInput;
export { SearchInput };
