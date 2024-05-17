// Import necessary React components.
import React from "react";
import FilterBTN from "../FilterBTN";

// Define the Species component that takes filter-related props.
const Species = ({ updateSpecies, updatePageNumber }) => {
  // Array of species
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item ">
      {/* Accordion header */}
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species {/* Display accordion title */}
        </button>
      </h2>
      {/* Accordion body */}
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        {/* Accordion body content */}
        <div className="accordion-body d-flex flex-wrap gap-3">
          {/* Map over species array and render FilterBTN for each species */}
          {species.map((item, index) => {
            return (
              <FilterBTN
                name="species" // Set the name attribute for the radio input
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies} // Pass updateSpecies function as task
                input={item} // Pass species as input value
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Export the Species component as the default export.
export default Species;
