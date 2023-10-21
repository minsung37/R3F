import { OrbitControls, useTexture } from "@react-three/drei"
import { useEffect, useRef } from "react";


const MyElement3D = () => {

  const mesh1 = useRef();
  const mesh2 = useRef();

  useEffect(() => {
    mesh2.current.material = mesh1.current.material;
  }, [])

  const matcap = useTexture("../public/matcap.jpg")

  return(
    <>
      <OrbitControls />
    
      <mesh ref={mesh1} position={[0.7, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.15, 256, 128]}/>
        <meshMatcapMaterial  // 광원 없어도 됨
          matcap={matcap}
          flatShading={true} 
          />
      </mesh>

      <mesh ref={mesh2} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]}/>
      </mesh>

    </>
  ) 
}


export default MyElement3D;