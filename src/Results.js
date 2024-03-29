import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import './Results.css';

export default function Results(props) {
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <h2 className="searchedWord">{props.results.word}</h2>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div className="phonetics" key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
