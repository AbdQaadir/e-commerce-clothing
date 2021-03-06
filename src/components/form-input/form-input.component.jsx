import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <div className="group">
      <input
        {...otherProps}
        value={value}
        className="form-input"
        onChange={handleChange}
      />
      {label ? (
        <label
          className={
            value.length ? "shrink form-input-label" : "form-input-label"
          }
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
