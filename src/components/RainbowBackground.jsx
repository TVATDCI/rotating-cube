import React from "react";
import Particles from "react-tsparticles"; // Corrected import for Particles
import { loadFull } from "tsparticles"; // Full engine for customization

const RainbowBackground = () => {
  const particlesInit = async (engine) => {
    console.log("Particles initialized", engine);
    await loadFull(engine); // Load the full tsparticles engine
  };

  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 80, // Adjust particle count
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: [
          "#ff0000", // Red
          "#ffff00", // Yellow
          "#00ff00", // Green
          "#00ffff", // Cyan
          "#0000ff", // Blue
          "#ff00ff", // Magenta
        ],
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6, // Movement speed
        outMode: "out",
      },
    },
    detectRetina: true,
  };

  return (
    <div
      className="rainbowContainer"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </div>
  );
};

export default RainbowBackground;
