import { OrbitControls, useTexture } from "@react-three/drei"
import * as THREE from "three";


const MyElement3D = () => {

  const textures = useTexture({
    map: "../public/glass/Glass_Window_002_basecolor.jpg",
    roughnessMap: "../public/glass/Glass_Window_002_roughness.jpg"
  })

  return(
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, -8]} intensity={0.4}/>
      <directionalLight position={[1, 2, 8]} intensity={0.4} />

      <mesh>
        <cylinderGeometry args={[2, 2, 3, 16, 1, true]} />
        <meshStandardMaterial
          side={THREE.DoubleSide}
          map={textures.map}
          roughnessMap={textures.roughnessMap}  
          roughnessMap-colorSpace={THREE.NoColorSpace}
        />
      </mesh> 

    </>
  ) 
}


export default MyElement3D;