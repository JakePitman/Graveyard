"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Granny } from "./Granny";
import { Graveyard } from "./Graveyard";

export const Experience = () => {
  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <group position={[0, -2, 0]}>
        <Granny />
        <Graveyard />
      </group>
    </Canvas>
  );
};
