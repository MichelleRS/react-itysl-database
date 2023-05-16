/* imports */
import { useState } from "react";
import SketchCard from "./components/SketchCard.jsx";
import sketchData from "./sketch-data.js";

export default function App() {
  const sketches = sketchData;
  const [filteredSketches, setFilteredSketches] = useState(sketchData);
  const [season, setSeason] = useState();

  // use set to filter by unique values
  const seasons = Array.from(new Set(sketches.map((sketch) => sketch.season)));

  // TODO function to filter by season
  const filterBySeason = (season) => {
    setFilteredSketches(
      sketches.filter((sketch) => {
        return sketch.season === season;
      })
    );
  };

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      {/* select season */}
      <label htmlFor="season"></label>
      <select
        name="select"
        id={season}
        onChange={(e) => filterBySeason(e.target.value)}
      >
        <option value="">Select season</option>
        {seasons.map((season) => {
          return <option key={season}>{season}</option>;
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
