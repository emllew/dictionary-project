import React from 'react';

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen <i class="fas fa-volume-up"></i>
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
