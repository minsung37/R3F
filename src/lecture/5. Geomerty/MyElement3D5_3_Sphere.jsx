import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";


const MyElement3D5 = () => {

  const refMesh = useRef();
  const refWireMesh = useRef();

  const radian = (degree) => {
    return THREE.MathUtils.degToRad(degree);
  }

  const { radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength } = useControls({
    radius: { value: 1, min: 0.1, max: 5, step: 0.01 },
    widthSegments: { value: 32, min: 3, max: 256, step: 1 },
    heightSegments: { value: 32, min: 2, max: 256, step: 1 },
    phiStart: { value: 0, min: 0, max: 360, step: 0.1 },
    phiLength: { value: 360, min: 0, max: 360, step: 0.1 },
    thetaStart: { value: 0, min: 0, max: 180, step: 0.1 },
    thetaLength: { value: 180, min: 0, max: 180, step: 0.1 }
  });

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry
  }, [radius, widthSegments, heightSegments])

  return(
    <>
      <OrbitControls />

      <ambientLight intensity={0.1}/>
      <directionalLight position={[2, 1, 3]} intensity={0.5} />

      <mesh ref={refMesh}>
        <sphereGeometry args={[ radius, widthSegments, heightSegments, radian(phiStart), radian(phiLength), radian(thetaStart), radian(thetaLength) ]}/>
        <meshStandardMaterial color="#1abc9c"/>
      </mesh>

      <mesh ref={refWireMesh}>
        <meshStandardMaterial emissive="yellow" wireframe={true}/>
      </mesh>

      <axesHelper scale={10} />
    </>
  )
}


export default MyElement3D5;