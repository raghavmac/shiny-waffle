import React from 'react';

const Button = props => (
  <button disabled={!props.disabled} onClick={props.onClick}>
    {props.content}
  </button>
);

export default Button;