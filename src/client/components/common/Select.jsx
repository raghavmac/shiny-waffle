import React from 'react';

const Select = props => (
  <select
    name={props.name}
    value={props.selected}
    onChange={props.onChange}
    className="form-select"
  >
    <option value="">{props.placeholder}</option>
    {props.options ?
      props.options.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      )) :
      []
    }
  </select>
);

export default Select;