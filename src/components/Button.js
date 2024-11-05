import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // Optional: Create a CSS file for styling

/**
 * Button component to trigger user actions.
 *
 * @component
 * @param {string} label - The text displayed on the button.
 * @param {boolean} disabled - Determines if the button is clickable.
 * @param {function} onClick - Callback function for button click event.
 */
const Button = ({ label, disabled, onClick }) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
