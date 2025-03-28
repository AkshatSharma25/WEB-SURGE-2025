import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GlitchText({ text }) {
  const [glitches, setGlitches] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new random glitch box
      setGlitches((prev) => [
        ...prev,
        {
          id: Math.random(),
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
          width: Math.random() * 20 + 10 + "px",
          height: Math.random() * 10 + 5 + "px",
          opacity: Math.random() * 0.8 + 0.2,
        }
      ]);

      // Remove old glitches to prevent overflow
      setTimeout(() => {
        setGlitches((prev) => prev.slice(1));
      }, 300);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-6xl font-bold text-white">
      <span className="relative z-10">{text}</span>

      {/* Glitch Rectangles */}
      {glitches.map((glitch) => (
        <motion.div
          key={glitch.id}
          className="absolute bg-white"
          style={{
            top: glitch.top,
            left: glitch.left,
            width: glitch.width,
            height: glitch.height,
            opacity: glitch.opacity,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: glitch.opacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </div>
  );
}
