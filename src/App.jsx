/* imports */
import { useState } from "react";
import SketchCard from "./components/SketchCard.jsx";
import sketchData from "./sketch-data.js";

export default function App() {
  // initialize variables
  // get sketches object
  const sketches = sketchData;
  // initialize variable to hold array of filter labels
  const filterCategories = ["Season 1", "Season 2", "Season 3", "Includes Tim"];

  // state
  const [filteredSketches, setFilteredSketches] = useState(sketchData);

  function toggleFilter(e) {
    console.log("I clicked on a checkbox!");
    console.log("Am I checked?", e);
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
    setFilteredSketches(sketches);
    // TODO uncheck inputs
  }

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      <form onSubmit={handleSubmit}>
        {filterCategories.map((category) => {
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
        {filteredSketches.map((sketch) => (
          <SketchCard key={sketch.id} {...sketch} />
        ))}
      </ul>
    </>
  );
}
