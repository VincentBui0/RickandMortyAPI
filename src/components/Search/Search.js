// Import React from the react library.
import React from "react";

// Import styles from the Search module CSS file.
import styles from "./Search.module.css";

// Define the Search component.
const Search = ({ setSearch, updatePageNumber }) => {
  // Function to handle search button click (preventing default action).
  let searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    // Search form with input field and search button.
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      {/* Input field for search */}
      <input
        onChange={(e) => {
          updatePageNumber(1); // Update page number when input changes
          setSearch(e.target.value); // Set search state based on input value
        }}
        placeholder="Search for characters"
        className={styles.input} // Apply styles to input
        type="text"
      />
      {/* Search button */}
      <button
        onClick={searchBtn} // Handle click event of search button
        className={`${styles.btn} btn btn-primary fs-5`} // Apply styles to button
      >
        Search
      </button>
    </form>
  );
};

// Export the Search component as the default export.
export default Search;
