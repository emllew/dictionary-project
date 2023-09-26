import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <h3>Synonyms:</h3>
        {props.synonyms.map(function (synonym, index) {
          return (
            <p className="listOfSynonyms" key={index}>
              {synonym}
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
