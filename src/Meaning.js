import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <ul>
            <div key={index}>
              <li>
                <div className="definition">{definition.definition}</div>
              </li>
              <div className="example">{definition.example}</div>

              <section>
                <Synonyms synonyms={definition.synonyms} />
              </section>
            </div>
          </ul>
        );
      })}
    </div>
  );
}
