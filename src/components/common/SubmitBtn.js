import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitBtn({ message }) {
  return (
    <button type="submit" className="submit-btn">
      {message}
    </button>
  );
}

SubmitBtn.propTypes = {
  message: PropTypes.string.isRequired,
};
