import { MeshDiscardMaterial, OrbitControls } from "@react-three/drei"


const MyElement3D = () => {

  return(
    <>
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh>
        <torusGeometry />
        {/* 그림자는 표현 */}
        <MeshDiscardMaterial /> 
        {/* <meshStandardMaterial visible={false} /> */}
      </mesh> 

    </>
  ) 
}


export default MyElement3D;