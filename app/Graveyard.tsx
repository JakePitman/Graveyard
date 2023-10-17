import { useGLTF, useTexture } from "@react-three/drei";

export const Graveyard = () => {
  const { nodes: graveyard } = useGLTF("/graveyard.glb");
  const graveyardTexture = useTexture("/baked.jpg");
  graveyardTexture.flipY = false;

  return (
    <mesh geometry={graveyard.merged.geometry}>
      <meshBasicMaterial map={graveyardTexture} />
    </mesh>
  );
};
