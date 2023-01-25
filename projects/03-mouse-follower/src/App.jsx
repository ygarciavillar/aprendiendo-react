import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ clientX: 0, clientY: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ clientX, clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      setPosition({ clientX: 0, clientY: 0 })
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.clientX}px, ${position.clientY}px)`
      }}
      />

      <button onClick={() => setEnabled(!enabled)}> {enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>

  )
}

export default App
