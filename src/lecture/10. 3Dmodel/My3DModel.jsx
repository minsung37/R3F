import { useGLTF, OrbitControls, Environment, useAnimations } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useState } from "react";


const MyElement3D = () => {
  
  const [height, setHeight] = useState(0);

  const model = useGLTF("../public/model.glb");
  const animations = useAnimations(model.animations, model.scene);
  const { actionName } = useControls({
    actionName: {
      value: animations.names[1],
      options: animations.names
    } 
  })

  useEffect(() => {
    const action = animations.actions[actionName];
    action.reset().fadeIn(0.5).play();
    return() => {
      action.fadeOut(0.5);
    }
  }, [actionName])

  useEffect(() => {
    let minY = Infinity, maxY = -Infinity

    model.scene.traverse(item => {
      if(item.isMesh) {
        const geomBox = item.geometry.boundingBox;
        if (minY > geomBox.min.y) minY = geomBox.min.y;
        if (maxY < geomBox.max.y) maxY = geomBox.max.y;
      }
    })

    const h = maxY - minY;
    setHeight(h);

  }, [model.scene])

  return(
    <>
      <OrbitControls/>

      <Environment preset="sunset" />

      <primitive 
        scale={5}
        position-y={-(height/2) * 5}
        object={model.scene}
      />
    </>
  )
}


export default MyElement3D;