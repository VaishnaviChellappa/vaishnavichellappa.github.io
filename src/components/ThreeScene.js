import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshWobbleMaterial } from "@react-three/drei";

function ThreeScene() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshWobbleMaterial color="#4CAF50" attach="material" factor={1} speed={2} />
      </Sphere>
    </Canvas>
  );
}

export default ThreeScene;
