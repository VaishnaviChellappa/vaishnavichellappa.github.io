import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

import "./Home.css";

function Home() {
  return (
    <div className="page-container">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="home-container"
    >
      <div className="text-container">
        <Parallax speed={-10}>
          <h1 className="main-title">Hi, I'm Vaishnavi Chellappa</h1>
        </Parallax>
        <Parallax speed={5}>
          <p className="sub-title">
            <Typewriter
              words={["Software Engineer", "Data Scientist", "AI Enthusiast"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </Parallax>
      </div>

      {/* 3D Blob */}
      <Canvas className="three-canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 2, 2]} />
        <Sphere args={[1, 100, 200]} scale={2.3}>  
          <MeshDistortMaterial color="#2A1B3D" emissive="#44318D" emissiveIntensity={0.5} attach="material" distort={0.4} speed={3.5} />
        </Sphere>
      </Canvas>
    </motion.div>
    </div>
  );
}

export default Home;
