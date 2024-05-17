// Import necessary React components.
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// Define the Pagination component.
const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  // Function to handle page change
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  // State to track window width
  const [width, setWidth] = useState(window.innerWidth);

  // Function to update window width
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  // Effect to add and remove event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      {/* Inline CSS for styling */}
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      {/* ReactPaginate component for pagination */}
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        // Set margin and page range based on window width
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange} // Handle page change event
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

// Export the Pagination component as the default export.
export default Pagination;
