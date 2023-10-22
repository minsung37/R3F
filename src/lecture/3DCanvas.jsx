import { Canvas } from "@react-three/fiber";
import MyElement3D from "./7. Light/Light_7_Enviroment"


const ThreeDemensionCanvas = () => {
  return(
    <>
      <Canvas 
        // camera={{ near: 3.5, far: 6 }}
        // Light에 사용
        camera={{ fov: 75, position:[7, 7, 0] }}
      >
        <MyElement3D/>
      </Canvas>
    </>
  )
}


export default ThreeDemensionCanvas;