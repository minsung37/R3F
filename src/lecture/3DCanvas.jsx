import { Canvas } from "@react-three/fiber";
import MyElement3D from "./6. Material/Material_2_7_Shader";


const ThreeDemensionCanvas = () => {
  return(
    <>
      <Canvas 
      // camera={{ near: 3.5, far: 6 }}
      >
        <MyElement3D/>
      </Canvas>
    </>
  )
}


export default ThreeDemensionCanvas;