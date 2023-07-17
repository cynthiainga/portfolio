import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ placeholder, error, name }) {
  return (
    <>
      <div className="input-main-container">
        <div className="input-wrapper">
          <div className="input">
            <input
              type="text"
              id={name}
              name={name}
              placeholder={placeholder}
            />
          </div>
          {error && (
            <span className="input-error-message">{error.message}</span>
          )}
        </div>
      </div>
    </>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  name: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Email',
  error: null,
  name: '',
};
