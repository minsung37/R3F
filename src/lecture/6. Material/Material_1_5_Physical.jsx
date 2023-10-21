import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";


const MyElement3D = () => {

  const mesh1 = useRef();
  const mesh2 = useRef();

  useEffect(() => {
    mesh2.current.material = mesh1.current.material;
  }, [])

  const { roughness, metalness, clearcoat, clearcoatRoughness } = useControls({
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    metalness: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01 }
  })

  return(
    <>
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7}/>
    
      <mesh ref={mesh1} position={[0.7, 0, 0]}>
        <boxGeometry />
        <meshPhysicalMaterial 
          visible={true}
          transparent={false} // 투명효과
          opacity={1} // 0: 투명, 1: 불투명
          depthTest={true}
          depthWrite={true}
          side={THREE.FrontSide} // FrontSide: 앞면만, BackSide: 뒷면만, DoubleSide: 둘다
          
          color={0xff0000} // 재질 색상
          emissive={0x000000} // 재질 자체 색상
          roughness={roughness} // 거칠기
          metalness={metalness} // 금속성    
          flatShading={false} // 평평하게 랜더링할지
          wireframe={false}

          clearcoat={clearcoat} // 코팅
          clearcoatRoughness={clearcoatRoughness} // 코팅에대한 거칠기

          />
      </mesh>

      <mesh ref={mesh2} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]}/>
      </mesh>

    </>
  ) 
}


export default MyElement3D;