import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import { MeshNormalMaterial } from "three";

export const Granny = () => {
  const { nodes: granny } = useGLTF("/granny.glb");
  const grannyRef = useRef(null);

  useFrame((_state, delta) => {
    if (grannyRef.current) {
      grannyRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float>
      <mesh
        ref={grannyRef}
        position={[0, 5, 0.5]}
        geometry={granny.Face.geometry}
        material={
          new MeshNormalMaterial({
            transparent: true,
            opacity: 0.9,
          })
        }
      />
    </Float>
  );
};
