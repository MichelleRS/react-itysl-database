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
    console.log("I applied the filters! What is e?", e);
    console.log(
      "I applied the filters! What are the filterCategories?",
      filteredCategories
    );
    e.target.style.border = "2px solid red";
    console.log("I applied the filters!! What is e.target?", e.target);
    // TODO search through the filteredCategories to get which filters were submitted

    // TODO find all sketches in data that match categories checked (const filteredSketches)

    // TODO update sketches with filteredSketches
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
