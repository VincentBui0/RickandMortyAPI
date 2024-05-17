// Import necessary React components.
import React from "react";

// Define the FilterBTN component that takes filter-related props.
const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      {/* Inline styling for dynamic CSS */}
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        {/* Hidden radio input */}
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        {/* Label acting as a styled button */}
        <label
          // On click, execute the task function and update page number
          onClick={(x) => {
            task(input); // Execute task function with input value
            updatePageNumber(1); // Update page number to 1
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`} // Use htmlFor instead of 'for' attribute for accessibility
        >
          {input} {/* Display filter input value */}
        </label>
      </div>
    </div>
  );
};

// Export the FilterBTN component as the default export.
export default FilterBTN;
