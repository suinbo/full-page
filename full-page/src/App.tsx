import { useEffect, useRef, useState } from "react"
import Dots from "./Dots"
import "./App.scss"

const App = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollIndex, setScrollIndex] = useState<number>(1)

    useEffect(() => {
        const divRef = containerRef.current

        const wheelHandler = (e: WheelEvent) => {
            e.preventDefault()

            const { deltaY } = e // 음수: 스크롤 올릴 때, 양수: 스크롤 내릴 때
            const pageHeight = window.innerHeight // 화면 세로길이(100vh)

            if (divRef) {
                const scrollTop = divRef.scrollTop // 스크롤 최상단 위치

                if (deltaY > 0) {
                    if (scrollTop >= 0 && scrollTop < pageHeight) {
                        // 1페이지
                        divRef.scrollTo({
                            top: pageHeight,
                            left: 0,
                            behavior: "smooth",
                        })
                    } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                        // 2페이지
                        divRef.scrollTo({
                            top: pageHeight * 2,
                            left: 0,
                            behavior: "smooth",
                        })
                    } else {
                        // 3페이지
                        divRef.scrollTo({
                            top: pageHeight * 2,
                            left: 0,
                            behavior: "smooth",
                        })
                    }
                } else {
                    if (scrollTop >= 0 && scrollTop < pageHeight) {
                        // 1페이지
                        divRef.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        })
                    } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                        // 2페이지
                        divRef.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        })
                    } else {
                        // 3페이지
                        divRef.scrollTo({
                            top: pageHeight,
                            left: 0,
                            behavior: "smooth",
                        })
                    }
                }
            }
        }

        if (divRef) {
            divRef.addEventListener("wheel", wheelHandler)
        }

        // 컴포넌트 언마운트 시 이벤트 제거 (메모리 누수 방지)
        return () => {
            divRef?.removeEventListener("wheel", wheelHandler)
        }
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <Dots scrollIndex={scrollIndex} />
            <div className="section bg1"></div>
            <div className="section bg2"></div>
            <div className="section bg3"></div>
        </div>
    )
}

export default App
