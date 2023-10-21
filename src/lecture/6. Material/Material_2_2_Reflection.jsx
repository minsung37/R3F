import { CubeCamera, MeshRefractionMaterial, OrbitControls } from "@react-three/drei"
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib"

const MyElement3D = () => {

  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr');

  return(
    <>
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <CubeCamera resolution={1024} frames={1} envMap={texture}>
        {(texture) => (
          <mesh>
            <dodecahedronGeometry />
            <MeshRefractionMaterial
              envMap={texture}
              toneMapped={false}
              bounces={2}
              aberrationStrength={0.03}
              ior={2.75}
              fresnel={1}
              color='white'
              fastChroma={true}
            />
          </mesh> 
        )}
      </CubeCamera>
    </>
  ) 
}


export default MyElement3D;