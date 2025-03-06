import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Cursor Trail Effect */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
      
      {/* Spotlight Hover Effect */}
      <motion.div
        className="spotlight"
        animate={{
          x: position.x - 75,
          y: position.y - 75,
        }}
        transition={{ ease: "linear", duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
