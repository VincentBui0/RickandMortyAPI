// Import necessary React components and modules.
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import CardDetails from "./CardDetails"; // This import is present but not used in this component.

// Define the Card component that takes 'page' and 'results' as props.
const Card = ({ page, results }) => {
  let display;

  // Check if there are results to display.
  if (results) {
    // Map over the results and create a card for each character.
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        // Link each card to its respective detail page.
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${styles.card} d-flex flex-column justify-content-center`}>
            <img className={`${styles.img} img-fluid`} src={image} alt={name} />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          {/* Display badge based on character's status. */}
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    // If no results are found, display a message.
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

// Export the Card component as the default export.
export default Card;
