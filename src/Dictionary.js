import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
          class="input"
          onChange={handleKeywordChange}
        />
        <button class="btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
