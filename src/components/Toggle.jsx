import React from 'react';

const Toggle = ({ label, checked, onChange }) => {
  return (
    <div className="container">
      {label}{' '}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          checked={checked}
          onChange={onChange}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>{' '}
      {checked ? 'Offline' : 'Online'}
    </div>
  );
};

export default Toggle;
