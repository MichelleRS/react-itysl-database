/* imports */
import { useState } from "react";
import SketchCard from "./components/SketchCard.jsx";
import sketchData from "./sketch-data.js";

export default function App() {
  const sketches = sketchData;
  const [filteredSketches, setFilteredSketches] = useState(sketchData);
  const [season, setSeason] = useState();
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

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      {/* select season */}
      <label htmlFor="season">Select Season</label>
      <select
        name="select"
        id={season}
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

      {/* display sketches */}
      <ul>
        {filteredSketches.map((sketch) => (
          <SketchCard key={sketch.id} {...sketch} />
        ))}
      </ul>
    </>
  );
}
