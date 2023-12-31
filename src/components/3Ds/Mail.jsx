/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Mail.gltf --transform
Author: i.deal3d (https://sketchfab.com/i.deal3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/emoji-heart-message-4bc8a62a1a1942b3a9ad74e60cf575d5
Title: Emoji heart message
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mail(props) {
  const { nodes, materials } = useGLTF('./img/Mail-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.016']} position={[0.003, 0.695, 0.069]} rotation={[0, 0, -0.776]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Material} position={[0.003, 0.72, 0.023]} />
    </group>
  )
}

useGLTF.preload('/Mail-transformed.glb')
