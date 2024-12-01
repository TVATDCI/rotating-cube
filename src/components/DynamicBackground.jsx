import { useEffect } from "react";

const DynamicBackground = ({ theme = "dynamic-gradient" }) => {
  // Default to dynamic-gradient
  useEffect(() => {
    const body = document.querySelector("body");

    const handleMouseMove = (event) => {
      const x = event.clientX - body.offsetLeft;
      const y = event.clientY - body.offsetTop;
      const width = body.offsetWidth;
      const height = body.offsetHeight;

      const angle = Math.atan2(y - height / 2, x - width / 2) * (180 / Math.PI);
      const color1 = `hsl(${angle + 180}, 100%, 50%)`;
      const color2 = `hsl(${angle}, 100%, 50%)`;

      body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
      body.style.transition = "background 0.2s ease"; // Smooth effect
    };

    body.addEventListener("mousemove", handleMouseMove);

    return () => {
      body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  return null; // No render
};

export default DynamicBackground;
