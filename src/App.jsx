import { useState } from "react";
import DynamicBackground from "./components/DynamicBackground";
import RotatingCube from "./components/RotatingCube";
import FloatingButton from "./components/FloatingButton";
import BuffleHeader from "./components/BuffleHeader";

function App() {
  const [background, setBackground] = useState("dynamic-gradient"); // Start with dynamic gradient
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
      "dynamic-gradient", // Dynamic gradient option
      "default",
    ];

    const randomAtmosphere =
      atmospheres[Math.floor(Math.random() * atmospheres.length)];
    setBackground(randomAtmosphere); // Update background state
    setBufferTrigger((prev) => prev + 1); // Force BuffleHeader re-render
  };

  console.log("App rendered with background:", background);

  return (
    <div className={`app ${background}`}>
      {/* Render DynamicBackground only for dynamic-gradient */}
      {background === "dynamic-gradient" && <DynamicBackground />}

      <FloatingButton onClick={changeAtmosphere} />
      <RotatingCube />
      <BuffleHeader trigger={bufferTrigger} />
    </div>
  );
}

export default App;
