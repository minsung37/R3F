import { OrbitControls, useTexture } from "@react-three/drei"
import { useEffect, useRef } from "react";
import * as THREE from "three";


const MyElement3D = () => {

  const textures = useTexture({
    map: "../public/glass/Glass_Window_002_basecolor.jpg",
    roughnessMap: "../public/glass/Glass_Window_002_roughness.jpg",
    metalnessMap: "../public/glass/Glass_Window_002_metallic.jpg",
    normalMap: "../public/glass/Glass_Window_002_normal.jpg",
    displacementMap: "../public/glass/Glass_Window_002_height.png",
    aoMap:"../public/glass/Glass_Window_002_ambientOcclusion.jpg"
  })

  const mesh = useRef();

  useEffect(() => {
    mesh.current.geometry.setAttribute("uv2", new THREE.BufferAttribute(mesh.current.geometry.attributes.uv.array, 2));
  }, [])

  return(
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, -8]} intensity={0.4}/>
      <directionalLight position={[1, 2, 8]} intensity={0.4} />

      <mesh ref={mesh}>
        <cylinderGeometry args={[2, 2, 3, 356, 256, true]} />
        <meshStandardMaterial
          // wireframe={true}
          side={THREE.DoubleSide}
          
          map={textures.map}
          
          roughnessMap={textures.roughnessMap}
          roughnessMap-colorSpace={THREE.NoColorSpace}
          
          metalnessMap={textures.metalnessMap}
          metalness={0.5}
          metalnessMap-colorSpce={THREE.NoColorSpace}

          normalMap={textures.normalMap}
          normalMap-NoColorSpace={THREE.NoColorSpace}
          normalScale={1}

          displacementMap={textures.displacementMap}
          displacementMap-colorSpace={THREE.NoColorSpace}
          displacementScale={0.2}
          displacementBias={-0.2}

          aoMap={textures.aoMap}
        />
      </mesh> 

    </>
  ) 
}


export default MyElement3D;