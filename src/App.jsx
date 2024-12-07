import { useState } from "react";
import DynamicBackground from "./components/DynamicBackground";
import RotatingCube from "./components/RotatingCube";
import FloatingButton from "./components/FloatingButton";
import BuffleHeader from "./components/BuffleHeader";
import MatrixGrid from "./components/MatrixGrid";
import Soundcloud from "./components/Soundcloud";
//import BackgroundAudio from "./components/BackgroundAudio";
//import RainbowBackground from "./components/RainbowBackground";

function App() {
  const [background, setBackground] = useState("dynamic-gradient"); // Default background
  const [bufferTrigger, setBufferTrigger] = useState(0);

  const getRandomAtmosphere = (current) => {
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
      "dynamic-gradient",
      "matrix-grid",
      "default",
    ];
    let newAtmosphere;
    do {
      newAtmosphere =
        atmospheres[Math.floor(Math.random() * atmospheres.length)];
    } while (newAtmosphere === current);
    return newAtmosphere;
  };

  const changeAtmosphere = () => {
    setBackground(getRandomAtmosphere(background));
    setBufferTrigger((prev) => prev + 1);
  };

  return (
    <div className={`app ${background}`}>
      {/* Render corresponding background component */}
      {/*<BackgroundAudio />*/}
      {background === "dynamic-gradient" && <DynamicBackground />}
      {background === "matrix-grid" && <MatrixGrid />}
      {/*{background === "rainbow" && <RainbowBackground />}*/}
      <FloatingButton onClick={changeAtmosphere} />
      <RotatingCube />
      <Soundcloud />
      <BuffleHeader trigger={bufferTrigger} />
    </div>
  );
}

export default App;
