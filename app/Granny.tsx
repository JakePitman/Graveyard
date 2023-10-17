import { useGLTF } from "@react-three/drei";
import { MeshNormalMaterial } from "three";

export const Granny = () => {
  const { nodes: granny } = useGLTF("/granny.glb");

  return (
    <mesh
      position={[0, 5, 0.5]}
      geometry={granny.Face.geometry}
      material={new MeshNormalMaterial()}
    />
  );
};
