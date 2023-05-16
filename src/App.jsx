/* imports */
import { useState } from "react";
import SketchCard from "./components/SketchCard.jsx";
import sketchData from "./sketch-data.js";

export default function App() {
  console.log("sketchData", sketchData);
  const [filteredSketches] = useState(sketchData);

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      <ul>
        {filteredSketches.map((sketch) => (
          <SketchCard key={sketch.id} {...sketch} />
        ))}
      </ul>
    </>
  );
}
