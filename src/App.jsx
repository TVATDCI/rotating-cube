import { useState } from "react";
import DynamicBackground from "./components/DynamicBackground";
import RotatingCube from "./components/RotatingCube";
import FloatingButton from "./components/FloatingButton";
import BuffleHeader from "./components/BuffleHeader";
import MatrixGrid from "./components/MatrixGrid";
import BackgroundAudio from "./components/BackgroundAudio";
//import RainbowBackground from "./components/RainbowBackground";

function App() {
  const [background, setBackground] = useState("dynamic-gradient"); // Default background
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
      "matrix-grid",
      "default",
    ];

    let newAtmosphere;
    do {
      newAtmosphere =
        atmospheres[Math.floor(Math.random() * atmospheres.length)];
    } while (newAtmosphere === background); // Avoid same consecutive background

    setBackground(newAtmosphere);
    setBufferTrigger((prev) => prev + 1); // Force BuffleHeader re-render
  };

  console.log("App rendered with background:", background);

  return (
    <div className={`app ${background}`}>
      {/* Render corresponding background component */}
      <BackgroundAudio />
      {background === "dynamic-gradient" && <DynamicBackground />}
      {background === "matrix-grid" && <MatrixGrid />}
      {/* {background === "rainbow" && <RainbowBackground />} */}
      <FloatingButton onClick={changeAtmosphere} />
      <RotatingCube />
      <BuffleHeader trigger={bufferTrigger} />
    </div>
  );
}

export default App;
