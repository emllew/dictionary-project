import React, { useState } from 'react';
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';
import axios from 'axios';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);

  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data[0].meanings);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      '563492ad6f917000010000012d98e698f4244510919248dea2bcbfa4';
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="search" onSubmit={Search}>
        <input
          type="search"
          placeholder="Search the dictionary..."
          className="input"
          onChange={handleKeywordChange}
        />
        <button className="btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <Results results={results} />
      <Photos photos={photos} />
      <br />

      <footer>
        Coded by
        <a href="https://www.github.com/emllew"> Emily</a>
        <br />
      </footer>
    </div>
  );
}
