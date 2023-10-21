import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";

const ThreeDemensionCanvas = () => {
  return(
    <>
      <Canvas>
        <MyElement3D/>
      </Canvas>
    </>
  )
}


export default ThreeDemensionCanvas;