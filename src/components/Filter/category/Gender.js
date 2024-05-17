// Import necessary React components.
import React from "react";
import FilterBTN from "../FilterBTN";

// Define the Gender component that takes filter-related props.
const Gender = ({ updateGender, updatePageNumber }) => {
  // Array of genders
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item">
      {/* Accordion header */}
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender {/* Display accordion title */}
        </button>
      </h2>
      {/* Accordion body */}
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        {/* Accordion body content */}
        <div className="accordion-body d-flex flex-wrap gap-3">
          {/* Map over genders array and render FilterBTN for each gender */}
          {genders.map((item, index) => {
            return (
              <FilterBTN
                name="gender" // Set the name attribute for the radio input
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateGender} // Pass updateGender function as task
                input={item} // Pass gender as input value
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Export the Gender component as the default export.
export default Gender;
