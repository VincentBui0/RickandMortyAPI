// Import necessary React components.
import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

// Define the Filter component that takes filter-related props.
const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  // Function to clear all filters and reset page number.
  let clear = () => {
    updateStatus(""); // Clear status filter.
    updateGender(""); // Clear gender filter.
    updateSpecies(""); // Clear species filter.
    updatePageNumber(1); // Reset page number to 1.
    window.location.reload(false); // Reload the page to apply changes.
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      {/* Filter title */}
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      {/* Clear filters button */}
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      {/* Filter accordion */}
      <div className="accordion" id="accordionExample">
        {/* Render Status filter component */}
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        {/* Render Species filter component */}
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        {/* Render Gender filter component */}
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

// Export the Filter component as the default export.
export default Filter;
