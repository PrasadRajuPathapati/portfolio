// src/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: { value: "transparent" },
        },
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: "#34d399" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#10b981",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 80 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;
