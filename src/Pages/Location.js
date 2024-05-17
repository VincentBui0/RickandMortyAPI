// Import necessary React hooks and components.
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

// Define the Location component.
const Location = () => {
  // Define state variables for managing fetched data.
  let [results, setResults] = useState([]); // State to store residents of the location.
  let [info, setInfo] = useState([]); // State to store location information.
  let { dimension, type, name } = info; // Destructure location information.
  let [number, setNumber] = useState(1); // State to store selected location ID.

  // Construct the API URL based on the selected location ID.
  let api = `https://rickandmortyapi.com/api/location/${number}`;

  // Fetch data from the API whenever the `api` variable changes.
  useEffect(() => {
    (async function () {
      // Fetch location data.
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      // Fetch resident data for the location.
      let residentsData = await Promise.all(
        data.residents.map((url) => {
          return fetch(url).then((res) => res.json());
        })
      );
      setResults(residentsData);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        {/* Render location name, dimension, and type. */}
        <h1 className="text-center mb-3">
          Location:
          <span className="text-primary"> {name || "Unknown"}</span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension || "Unknown"}
        </h5>
        <h6 className="text-center">Type: {type || "Unknown"}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          {/* Render the InputGroup component to select locations. */}
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            {/* Render the Card component to display residents. */}
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Location component as the default export.
export default Location;
