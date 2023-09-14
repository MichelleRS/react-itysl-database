/* imports */
import { useState } from "react";
import SketchCard from "./components/SketchCard.jsx";
import sketchData from "./sketch-data.js";

export default function App() {
  // initialize variables
  // get sketches object
  const sketches = sketchData;
  // get seasons for select element; use set to filter by unique values
  const seasons = Array.from(new Set(sketches.map((sketch) => sketch.season)));

  // state
  const [filteredSketches, setFilteredSketches] = useState(sketchData);
  // TODO: how is this being used?
  const [season, setSeason] = useState();
  const [includesTim, setIncludesTim] = useState(false);

  // TODO: sync with checkbox toggle
  function filterBySeason(season) {
    // update state for season
    // setSeason(season);

    // if "all" selected:
    if (season === "all") {
      setFilteredSketches(sketches);
    }
    // if a season is selected
    else {
      // initialize variable to hold sketches in selected season
      const filteredBySeason = sketches.filter(
        (sketch) => sketch.season === Number(season)
      );
      // update filtered sketches with selected season
      setFilteredSketches(filteredBySeason);
    }
  }

  // TODO: toggle display of sketches
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
    setFilteredSketches(filteredByTim);
  }

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      {/* select: season */}
      <label htmlFor="season">Select Season</label>
      <select
        name="season"
        id="season"
        onChange={(e) => filterBySeason(e.target.value)}
      >
        <option value="all">All</option>
        {seasons.map((season) => {
          return (
            <option key={season} value={season}>
              Season {season}
            </option>
          );
        })}
      </select>
      {/* checkbox: toggle sketches with tim */}
      <input
        type="checkbox"
        id="includesTim"
        name="includesTim"
        onChange={(e) => toggleIncludesTim(e.target.value)}
      />
      <label htmlFor="includesTim">Only show sketches with Tim Robinson</label>
      {/* TODO: button to reset filters */}
      {/* display sketches */}
      <ul>
        {filteredSketches.map((sketch) => (
          <SketchCard key={sketch.id} {...sketch} />
        ))}
      </ul>
    </>
  );
}
