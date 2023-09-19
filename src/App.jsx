/* imports */
import { useState } from "react";
import SketchCard from "./components/SketchCard.jsx";
import sketchData from "./sketch-data.js";

export default function App() {
  // state
  const [sketches, setSketches] = useState(sketchData);
  const [filteredCategories, setFilteredCategories] = useState([]);

  // hold array of labels for filter categories
  const checkboxLabels = ["Season 1", "Season 2", "Season 3", "Includes Tim"];

  function toggleFilter(checked, checkboxEl) {
    console.log("I clicked on a checkbox! Am I checked?", checked);
    // get filter category
    let category = checkboxEl.name;
    console.log("category", category);

    // when checked, add to filtered categories
    if (checked) {
      console.log("If `checked` is:", checked);
      console.log("checkboxEl", checkboxEl);
      setFilteredCategories([...filteredCategories, category]);
    }
    // when unchecked, remove from filteredCategories
    else {
      console.log("Else `checked` is:", checked);
      console.log("checkboxEl", checkboxEl);
      setFilteredCategories(
        filteredCategories.filter(
          (filteredCategory) => filteredCategory !== category
        )
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // clear array of sketches
    setSketches([]);
    console.log("filteredCategories.length", filteredCategories.length);

    // loop through sketch data to find sketches that match selected filter categories
    for (let i in sketchData) {
      let sketch = sketchData[i];
      // filter category: season 1
      if (sketch.season === 1 && filteredCategories.includes("Season 1")) {
        // add sketch to sketches
        setSketches((sketches) => [...sketches, sketch]);
      }
      // filter category: season 2
      if (sketch.season === 2 && filteredCategories.includes("Season 2")) {
        // add sketch to sketches
        setSketches((sketches) => [...sketches, sketch]);
      }
      // filter category: season 3
      if (sketch.season === 3 && filteredCategories.includes("Season 3")) {
        // add sketch to sketches
        setSketches((sketches) => [...sketches, sketch]);
      }
      // filter category: any season + includes tim
      if (
        filteredCategories.length > 1 &&
        filteredCategories.includes("Includes Tim")
      ) {
        // loop through sketches and filter out any that do not include tim
        setSketches((prevSketches) =>
          prevSketches.filter((prevSketch) => prevSketch.includesTim)
        );
      }
      // filter category: only includes tim
      if (
        filteredCategories.length === 1 &&
        filteredCategories.includes("Includes Tim")
      ) {
        console.log("I only chose the Includes Tim filter!!");
        // update sketches to all sketches that include tim
        setSketches(sketchData.filter((sketch) => sketch.includesTim));
      }
    }
    console.log("sketches", sketches);
  }

  function resetFilters() {
    console.log("I clicked the reset button!");
    // TODO uncheck inputs
  }

  return (
    <>
      <h1>I Think You Should Leave Database</h1>
      <form onSubmit={handleSubmit}>
        {checkboxLabels.map((category) => {
          return (
            <>
              <input
                type="checkbox"
                id={category}
                key={category}
                name={category}
                onChange={(e) =>
                  toggleFilter(e.target.checked, e.currentTarget)
                }
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
