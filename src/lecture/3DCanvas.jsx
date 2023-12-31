import { Canvas } from "@react-three/fiber";
import MyElement3D from "./10. 3Dmodel/My3DModel"


const ThreeDemensionCanvas = () => {
  return(
    <>
      <Canvas 
        // camera={{ near: 3.5, far: 6 }}
        
        // Light
        // camera={{ fov: 75, position:[7, 7, 0] }}
        
        // perspective camera
        // camera={{ 
        //   fov: 130,
        //   near: 0.1,
        //   // far: 10,
        //   position:[7, 7, 0]
        // }}

        // orthography camera
        // orthographic
        // camera={{
        //   near: 0.1,
        //   far: 20,
        //   zoom: 100,
        //   position:[7, 7, 0]
        // }}

        // shadow
        // shadows
        // camera={{ 
        //   near: 1, far: 100, position:[7, 7, 0]
        // }}

        // shadow_3
        // shadows="variance"
        // camera={{ 
        //   near: 1, far: 100, position:[7, 7, 0]
        // }}

        // 3Dmodel
        camera={{
          near: 1,
          far: 100,
          position: [7, 7, 0]
        }}
      >
        <MyElement3D/>
      </Canvas>
    </>
  )
}


export default ThreeDemensionCanvas;