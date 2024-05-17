// Import necessary React hooks and components.
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Define the CardDetails component.
const CardDetails = () => {
  let { id } = useParams(); // Get the character ID from the URL parameters.

  // Define state variable to store fetched character data.
  let [fetchedData, updateFetchedData] = useState({});
  let { name, location, origin, gender, image, status, species } = fetchedData; // Destructure character data.

  // Construct the API URL based on the character ID.
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  // Fetch character data from the API whenever the `api` variable changes.
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        {/* Render character name. */}
        <h1 className="text-center">{name}</h1>
        {/* Render character image. */}
        <img className="img-fluid" src={image} alt={name} />
        {/* Display badge based on character's status. */}
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          {/* Render character details. */}
          <div>
            <span className="fw-bold">Gender: </span>
            {gender}
          </div>
          <div>
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div>
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div>
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the CardDetails component as the default export.
export default CardDetails;
