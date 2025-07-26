import { useEffect, useState } from 'react'

const useCountAnimation = (end: number, duration: number, trigger: boolean = false) => {
    const start = end > 1000 ? end - 500 : 0
    const [count, setCount] = useState(start)

    useEffect(() => {
        if (!trigger || start === end || duration <= 0) {
            if (trigger) {
                setCount(end)
            }
            return
        }

        const step = start < end ? 1 : -1
        const totalSteps = Math.abs(end - start)
        const interval = duration / totalSteps
        let current = start
        setCount(current)

        const timer = setInterval(() => {
            current += step
            setCount(current)
            if (current === end) {
                clearInterval(timer)
            }
        }, interval)

        return () => clearInterval(timer)
    }, [start, end, duration, trigger])

    return { count }
}

export default useCountAnimation
