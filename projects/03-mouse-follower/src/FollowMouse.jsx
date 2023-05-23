import { useEffect, useState } from "react"

export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
        }

        if (enabled) {
            window.addEventListener('pointermove', handleMove)
        }

        return () => {
            setPosition({ x: 0, y: 0 })
            window.removeEventListener('pointermove', handleMove)
        }

    }, [enabled])

    return (
        <>
            <div
                className="pointer"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }} />

            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} seguir puntero
            </button >
        </>
    )
}