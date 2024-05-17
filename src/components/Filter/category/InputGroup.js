// Import necessary React components.
import React from "react";

// Define the InputGroup component that takes input-related props.
const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-3">
      {/* Select input */}
      <select
        onChange={(e) => changeID(e.target.value)} // On change, call changeID function with selected value
        className="form-select"
        id={name}
      >
        {/* Default option */}
        <option value="1">Choose...</option>
        {/* Map over total number of options and render each */}
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option key={index} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

// Export the InputGroup component as the default export.
export default InputGroup;
