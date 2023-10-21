import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const MyElement3D4 = () => {

  const refMesh = useRef();

  useFrame((state, delta) => {
    refMesh.current.rotation.z += delta;
  })

  const radian = (degree) => {
    return THREE.MathUtils.degToRad(degree);
  }

  return(
    <>
      <directionalLight position={[1, 1, 1]} />
      {/* world 좌표계 */}
      <axesHelper scale={10} />
      <OrbitControls />
      <mesh
        ref={refMesh}
        position-y={2}
        rotation-z={radian(45)}
        scale={[2, 1, 1]}
      >
        <boxGeometry />
        <meshStandardMaterial 
          color="#e67e22"
          opacity={0.5}
          transparent={true}  
        />
        {/* 좌표계 */}
        <axesHelper scale={10} />

        <mesh
          scale={[0.1, 0.1, 0.1]}
          position-y={2}
        >
          <axesHelper scale={10} />
          <sphereGeometry />
          <meshStandardMaterial color="red"/>
        </mesh>

      </mesh>
    </>
  )
}


export default MyElement3D4;