import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data[0].meanings);
    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
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
      <div className="row">
        <div className="col-6 p-4">
          <Results results={results} />
        </div>
      </div>
      <br />
      <footer>
        Coded by
        <a href="https://www.github.com/emllew"> Emily</a>
        <br />
        <aside>
          <a href="https://dictionaryapi.dev/">Dictionary API</a>
        </aside>
        <br />
      </footer>
    </div>
  );
}
