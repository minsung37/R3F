import { OrbitControls, Box } from "@react-three/drei";
import * as THREE from "three";

const MyBox = (props) => {
  const geom = new THREE.BoxGeometry();
  return <mesh {...props} geometry={geom}>
  </mesh>
}

const MyElement3D5 = () => {

  // drei : RF3에서 사용할 수 있는 유용한 컴포넌트들을 모아논 라이브러리
  // npm i @react-three/drei

  return(
    <>
      <OrbitControls />

      <ambientLight intensity={0.1}/>
      <directionalLight position={[2, 1, 3]} intensity={0.5} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="#1abc9c"/>
      </mesh>
      
      <Box position={[1.2, 0, 0]}>
        <meshStandardMaterial color="#8e44ad"/>
      </Box>

      <MyBox position={[-1.2, 0, 0]}>
        <meshStandardMaterial color="#e74c3c"/>
      </MyBox>
    </>
  )
}


export default MyElement3D5;