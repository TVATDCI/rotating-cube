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
      "default",
    ];

    const randomAtmosphere =
      atmospheres[Math.floor(Math.random() * atmospheres.length)];
    setBackground(randomAtmosphere);

    setBufferTrigger((prev) => prev + 1); // Increment trigger
  };

  console.log("App rendered", bufferTrigger);

  return (
    <div className={`app ${background}`}>
      <FloatingButton onClick={changeAtmosphere} />
      <RotatingCube />
      <BuffleHeader trigger={bufferTrigger} />{" "}
      {/* Pass trigger to force reanimation */}
    </div>
  );
}

export default App;
