/* imports */
import { useState } from "react";
import SketchCard from "./components/SketchCard.jsx";
import sketchData from "./sketch-data.js";

export default function App() {
  const sketches = sketchData;
  const [filteredSketches, setFilteredSketches] = useState(sketchData);
  console.log("filteredSketches", filteredSketches);
  const [season, setSeason] = useState();
  const [includesTim, setIncludesTim] = useState(false);
  // initialize variable for seasons
  // use set to filter by unique values
  const seasons = Array.from(new Set(sketches.map((sketch) => sketch.season)));

  function filterBySeason(season) {
    // update state for season
    setSeason(season);
    // initialize variable to hold sketches in selected season
    const filteredBySeason = sketches.filter(
      (sketch) => sketch.season === Number(season)
    );
    // update filtered sketches with selected season
    setFilteredSketches(filteredBySeason);
  }

  // TODO - toggle display of sketches
  function toggleIncludesTim() {
    // update state for includesTim
    setIncludesTim(!includesTim);
    // initialize variable for sketches that include tim
    const filteredByTim = sketches.filter((sketch) => {
      // check for sketches that include tim
      if (sketch.includesTim === true) {
        // add sketch to new array
        return { ...sketch };
      }
    });
    console.log("filteredByTim", filteredByTim);
    setFilteredSketches(filteredByTim);
    console.log("filteredSketches in toggle", filteredSketches);
  }

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      {/* select season */}
      {/* TODO: fix console error: Incorrect use of <label for=FORM_ELEMENT> */}
      <label htmlFor="season">Select Season</label>
      <select
        name="season"
        id="season"
        onChange={(e) => filterBySeason(e.target.value)}
      >
        <option value="">All</option>
        {seasons.map((season) => {
          return (
            <option key={season} value={season}>
              Season {season}
            </option>
          );
        })}
      </select>
      {/* sketches with only tim */}
      <input
        type="checkbox"
        id="includesTim"
        name="includesTim"
        defaultChecked={false}
        // checked={includesTim}
        onChange={(e) => toggleIncludesTim(e.target.value)}
      />
      <label htmlFor="includesTim">Only show sketches with Tim Robinson</label>
      {/* display sketches */}
      <ul>
        {filteredSketches.map((sketch) => (
          <SketchCard key={sketch.id} {...sketch} />
        ))}
      </ul>
    </>
  );
}
