export default function SketchCard(sketch) {
  return (
    <li>
      <h3>{sketch.title}</h3>
      <p>
        Season {sketch.season}, Episode {sketch.episode}
      </p>
    </li>
  );
}
