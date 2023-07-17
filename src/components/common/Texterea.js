import React from 'react';
import PropTypes from 'prop-types';

export default function Texterea({ name, placeholder, error }) {
  return (
    <div className="textarea-input-main-container">
      <div className="input-wrapper">
        <div className="textarea">
          <textarea name={name} id={name} placeholder={placeholder} />
        </div>
        {error && <span className="input-error-message">{error.message}</span>}
      </div>
    </div>
  );
}

Texterea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};

Texterea.defaultProps = {
  error: null,
};
