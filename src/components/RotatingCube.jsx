import React, { useRef, useEffect, useCallback } from "react";
import "./RotatingCube.css";

const RotatingCube = () => {
  const cubeRef = useRef(null);
  const animationFrameId = useRef(null);

  const animate = useCallback(() => {
    const cube = cubeRef.current;
    if (cube) {
      cube.style.transform = `rotateX(${Date.now() / 100}deg) rotateY(${Date.now() / 150}deg)`;
      animationFrameId.current = requestAnimationFrame(animate);
    }
  }, []);

  useEffect(() => {
    animate();
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate]);

  return (
    <main>
      <div className="rotating-cube" ref={cubeRef}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </main>
  );
};

export default RotatingCube;
