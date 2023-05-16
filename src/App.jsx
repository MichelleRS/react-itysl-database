/* imports */
import { useState } from "react";
import sketchData from "./sketch-data.js";

export default function App() {
  console.log("sketchData", sketchData);
  const [filteredSketches] = useState(sketchData);

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      <ul>
        {filteredSketches.map((sketch) => {
          const { id, season, episode, title } = sketch;
          return (
            <li key={id}>
              <h3>{title}</h3>
              <p>
                Season {season}, Episode {episode}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
