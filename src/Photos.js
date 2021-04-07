import React from 'react';
import './Photos.css';
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.photographer}
                  key={index}
                  className="img-fluid"
                />
              </a>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
