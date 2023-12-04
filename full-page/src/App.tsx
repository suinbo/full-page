import React, { useEffect, useRef } from "react"
import "./App.scss"

const App = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wheelHandler = (e: WheelEvent) => {
            //e.preventDefault()
        }

        const containerRefCurrent = containerRef.current

        if (containerRefCurrent) {
            containerRefCurrent.addEventListener("wheel", wheelHandler)
        }

        // 컴포넌트 언마운트 시 wheelHandler 제거
        return () => {
            containerRefCurrent?.removeEventListener("wheel", wheelHandler)
        }
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <div className="section bg1"></div>
            <div className="section bg2"></div>
            <div className="section bg3"></div>
        </div>
    )
}

export default App
