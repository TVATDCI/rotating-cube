import { useState } from "react";
import RotatingCube from "./components/RotatingCube";
import FloatingButton from "./components/FloatingButton";

function App() {
  const [background, setBackground] = useState("default");

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
      "default", // The original background
    ];
    const randomAtmosphere =
      atmospheres[Math.floor(Math.random() * atmospheres.length)];
    setBackground(randomAtmosphere);
  };

  return (
    <div className={`app ${background}`}>
      <FloatingButton onClick={changeAtmosphere} />
      <RotatingCube />
    </div>
  );
}

export default App;
