import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html } from '@react-three/drei'

function Model({ path, scale = 1, position = [0, 0, 0] }) {
  const gltf = useGLTF(path)
  return <primitive object={gltf.scene} scale={scale} position={position} />
}

export default function Avatar() {
  // adjust extension to .glb if needed
 const modelPath = '/models/valir_-_pale_flame/scene.gltf'


  return (
    <div className="canvas-wrap">
      <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 10, 7]} intensity={1} />

        <Suspense fallback={<Html center>Loading avatar...</Html>}>
          <Model path={modelPath} scale={1.3} position={[0, -1, 0]} />
        </Suspense>

        {/* Controls: disable pan/zoom and lock vertical tilt so user can only rotate horizontally */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
