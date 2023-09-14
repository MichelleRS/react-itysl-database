/* imports */
import { useState } from "react";
import SketchCard from "./components/SketchCard.jsx";
import sketchData from "./sketch-data.js";

export default function App() {
  // initialize variables
  // get sketches object
  const sketches = sketchData;
  // hold array of filter categories
  const filterLabels = ["Season 1", "Season 2", "Season 3", "Includes Tim"];

  // TODO state
  const [filterCategories, setFilterCategories] = useState([]);

  function toggleFilter(e) {
    console.log("I clicked on a checkbox!");
    console.log("Am I checked?", e);
    // TODO if checked, add the filter category into filteredCategories
    if (e) {
      console.log("If");
    }
    // TODO if not checked, remove the filter category from filteredCategories
    else {
      console.log("Else");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("I applied the filters!");
    console.log("e", e);
    // TODO check filter categories selected
    // TODO return sketches with those filter categories
  }
  function resetFilters() {
    console.log("I clicked reset button!");
    // TODO uncheck inputs
  }

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      <form onSubmit={handleSubmit}>
        {filterLabels.map((category) => {
          return (
            <>
              <input
                type="checkbox"
                id={category}
                key={category}
                name={category}
                onChange={(e) => toggleFilter(e.target.checked)}
              />
              <label htmlFor={category}>{category}</label>
            </>
          );
        })}
        <button type="submit">Apply Filters</button>
        <button type="button" onClick={resetFilters}>
          Reset Filters
        </button>
      </form>
      {/* display sketches */}
      <ul>
        {sketches.map((sketch) => (
          <SketchCard key={sketch.id} {...sketch} />
        ))}
      </ul>
    </>
  );
}
