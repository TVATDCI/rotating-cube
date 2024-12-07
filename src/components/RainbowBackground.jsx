import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const RainbowBackground = () => {
  const particlesInit = async (engine) => {
    console.log("Particles initialized", engine);
    await loadFull(engine); // Load the full engine
  };

  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 100, // Increase particle count for denser effect
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: [
          "#ff0000",
          "#ff9900",
          "#ffff00",
          "#00ff00",
          "#00ffff",
          "#0000ff",
          "#ff00ff",
        ],
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 120,
        opacity: 0.3,
        width: 1,
      },
      shape: {
        type: ["circle", "polygon"],
        polygon: {
          sides: 6, // Use hexagonal particles as an additional shape
        },
      },
      opacity: {
        value: 0.8,
      },
      size: {
        value: { min: 3, max: 6 }, // Dynamic size
      },
      move: {
        enable: true,
        speed: 3, // Slow down for a smoother effect
        outMode: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Particle linking on hover
        },
        onClick: {
          enable: true,
          mode: "repulse", // Push particles away on click
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.5,
          },
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
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
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Temporary background color
        zIndex: 0,
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
