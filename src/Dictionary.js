import React, { useState } from 'react';
import './Dictionary.css';
import Results from './Results';
import axios from 'axios';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState([]);

  function handleResponse(response) {
    console.log(response.data[0].meanings);
    setResults(response.data[0].meanings[0].definitions[0].definition);
  }

  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="search" onSubmit={Search}>
        <input
          type="search"
          placeholder="Search..."
          className="input"
          onChange={handleKeywordChange}
        />
        <button className="btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
