import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Card = props => (
  <article className="card">
    <div className="card-body">
      <FaTimes className="delete" onClick={props.onDelete} />
      <h2>{props.title}</h2>
      <p className="sub-title">{props.subTitle}</p>
    </div>
  </article>
);

export default Card;