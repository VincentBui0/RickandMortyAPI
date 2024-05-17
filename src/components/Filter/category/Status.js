// Import necessary React components.
import React from "react";
import FilterBTN from "../FilterBTN";

// Define the Status component that takes filter-related props.
const Status = ({ updateStatus, updatePageNumber }) => {
  // Array of status options
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item">
      {/* Accordion header */}
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status {/* Display accordion title */}
        </button>
      </h2>
      {/* Accordion body */}
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        {/* Accordion body content */}
        <div className="accordion-body d-flex flex-wrap gap-3">
          {/* Map over status array and render FilterBTN for each status option */}
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status" // Set the name attribute for the radio input
              task={updateStatus} // Pass updateStatus function as task
              updatePageNumber={updatePageNumber}
              input={item} // Pass status option as input value
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Export the Status component as the default export.
export default Status;
