// Import necessary React hooks and components.
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

// Define the Episodes component.
const Episodes = () => {
  // Define state variables for managing fetched data.
  let [results, setResults] = useState([]); // State to store characters in the episode.
  let [info, setInfo] = useState([]); // State to store episode information.
  let { air_date, episode, name } = info; // Destructure episode information.
  let [id, setID] = useState(1); // State to store selected episode ID.

  // Construct the API URL based on the selected episode ID.
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  // Fetch data from the API whenever the `api` variable changes.
  useEffect(() => {
    (async function () {
      // Fetch episode data.
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      // Fetch character data for the episode.
      let charactersData = await Promise.all(
        data.characters.map((url) => {
          return fetch(url).then((res) => res.json());
        })
      );
      setResults(charactersData);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        {/* Render episode name and air date. */}
        <h1 className="text-center mb-3">
          Episode name: <span className="text-primary">{name || "Unknown"}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date || "Unknown"}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          {/* Render the InputGroup component to select episodes. */}
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            {/* Render the Card component to display characters. */}
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Episodes component as the default export.
export default Episodes;
