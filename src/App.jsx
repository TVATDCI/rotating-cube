import { useState } from "react";
import RotatingCube from "./components/RotatingCube";
import FloatingButton from "./components/FloatingButton";
import BuffleHeader from "./components/BuffleHeader";

function App() {
  const [background, setBackground] = useState("default");
  const [bufferTrigger, setBufferTrigger] = useState(0);

  const changeAtmosphere = () => {
    const atmospheres = [
      "space",
      "nebula",
      "galaxy",
      "starfield",
      "snowy-mountains",
      "sunset-beach",
      "amazon-forest",
      "volcano",
      "desert",
      "underwater",
      "white-diamond",
      "default", // Original background
    ];
    const randomAtmosphere =
      atmospheres[Math.floor(Math.random() * atmospheres.length)];
    setBackground(randomAtmosphere);

    // Trigger the re-buffering animation
    setBufferTrigger((prev) => prev + 1);
  };

  return (
    <div className={`app ${background}`}>
      <FloatingButton onClick={changeAtmosphere} />
      <RotatingCube />
      {/* Pass bufferTrigger as key to force re-mount */}
      <BuffleHeader key={bufferTrigger} />
    </div>
  );
}

export default App;
