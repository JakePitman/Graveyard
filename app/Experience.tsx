"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Granny } from "./Granny";
import { Graveyard } from "./Graveyard";

export const Experience = () => {
  return (
    <Canvas>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight />
      <Granny />
      <Graveyard />
    </Canvas>
  );
};
