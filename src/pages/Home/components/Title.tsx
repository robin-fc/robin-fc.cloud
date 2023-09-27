import { extend, useLoader, useThree } from '@react-three/fiber'
import { useSpring } from '@react-spring/three'
import { useControls } from 'leva'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { Color } from 'three'

extend({ TextGeometry })

const Title = () => {
  const ref: any = useRef()
  const { color, text } = useControls({ color: 'white', text: 'FL426星球正在建设中，你可以先在我的地球工作室随便逛逛' })
  const font = useLoader(FontLoader, '/typefaces/FZHei-B01S_Regular.json')
  const config = useMemo(() => ({ font, size: 0.1, height: 0.04 }), [font])

  const { camera } = useThree()

  useSpring(
    () => ({
      from: { y: camera.position.y + 5 },
      to: { y: camera.position.y },
      config: { friction: 100 },
      onChange: ({ value }) => ((camera.position.y = value.y), camera.lookAt(0, 0, 0)),
    }),
    [],
  )

  useLayoutEffect(() => {
    ref?.current?.geometry?.center()
  }, [text])

  return (
    <mesh ref={ref} position={[0, 2.2, 0]} rotation={[0, Math.PI / 4, 0]}>
      <textGeometry args={[text, config]} />
      <meshStandardMaterial color={color} roughness={0.5}/>
    </mesh>
  )
}

export default Title
