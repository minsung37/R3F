import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";


const MyElement3D = () => {

  const refMesh = useRef();
  const refWireMesh = useRef();

  const radian = (degree) => {
    return THREE.MathUtils.degToRad(degree);
  }

  const { radius, tube, radialSegments, tubularSegments, arc } = useControls({
    radius: { value: 0, min: 0.1, max: 5, step: 0.01 },
    tube: { value: 0.4, min: 0.1, max: 5, step: 0.01 },
    radialSegments: { value: 12, min: 0.1, max: 360, step: 0.01 },
    tubularSegments: { value: 48, min: 3, max: 360, step: 1 },
    arc: { value: 360, min: 1, max: 360, step: 1 },
  });

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry
  }, [radius, tube, radialSegments, tubularSegments, arc])

  return(
    <>
      <OrbitControls />

      <ambientLight intensity={0.1}/>
      <directionalLight position={[2, 1, 3]} intensity={0.5} />

      <mesh ref={refMesh}>
        <torusGeometry args={[radius, tube, radialSegments, tubularSegments, radian(arc)]}/>
        <meshStandardMaterial color="#1abc9c"/>
      </mesh>

      <mesh ref={refWireMesh}>
        <meshStandardMaterial emissive="yellow" wireframe={true}/>
      </mesh>

      <axesHelper scale={10} />
    </>
  )
}


export default MyElement3D;