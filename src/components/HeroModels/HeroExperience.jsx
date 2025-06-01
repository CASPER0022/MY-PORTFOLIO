import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { DirectionalLight } from 'three'
import {Room} from './Room';
import {Robot} from './Robot';
import HeroLights from './HeroLights'
import Particles from './Particles'
import { Robot_final } from './Robot_final'



const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  return (
    <Canvas camera={{ position: [0,0,15], fov: 45}}>
        
        <OrbitControls
          enablePan = {false}
          enableZoom = {false}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <HeroLights/>
        <Particles count={70}/>
        <group
        scale={isMobile? 3 : 3.6}
        position={[0,-3.5,0]}
        rotation={[0, Math.PI/4,0]}>
           <Robot_final/>
        </group>

    </Canvas>
  )
}

export default HeroExperience