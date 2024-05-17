// Import Bootstrap CSS and JS for styling and interactivity.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// Import necessary React hooks.
import React, { useState, useEffect } from "react";

// Import custom components.
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";

// Import React Router components for routing.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";

// Define the main App component.
function App() {
  return (
    // Wrap the application in Router to enable routing.
    <Router>
      <div className="App">
        {/* Render the Navbar component at the top. */}
        <Navbar />
      </div>
      {/* Define the Routes for the application. */}
      <Routes>
        {/* Route for the Home page. */}
        <Route path="/" element={<Home />} />
        {/* Route for individual character details. */}
        <Route path="/:id" element={<CardDetails />} />
        {/* Route for the Episodes page. */}
        <Route path="/episodes" element={<Episodes />} />
        {/* Route for individual episode details. */}
        <Route path="/episodes/:id" element={<CardDetails />} />
        {/* Route for the Location page. */}
        <Route path="/location" element={<Location />} />
        {/* Route for individual location details. */}
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

// Define the Home component.
const Home = () => {
  // Define state variables for managing filter parameters and fetched data.
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  // Construct the API URL based on filter parameters.
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // Fetch data from the API whenever the `api` variable changes.
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      {/* Render the page title. */}
      <h1 className="text-center mb-3">Characters</h1>
      {/* Render the Search component. */}
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          {/* Render the Filter component. */}
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              {/* Render the Card component to display character cards. */}
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      {/* Render the Pagination component. */}
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

// Export the App component as the default export.
export default App;
