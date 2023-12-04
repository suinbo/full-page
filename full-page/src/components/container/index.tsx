import React, { useCallback, useState } from "react"
import Dots from "./dots"
import useWheel from "../../hooks/useWheel"
import "./style.scss"

const DIVIDER_HEIGHT = 5

const Body = () => {
    const [scrollIndex, setScrollIndex] = useState<number>(1)

    const wheelHandler = useCallback((ref: React.RefObject<HTMLDivElement>, deltaY: number, scrollTop: number) => {
        const pageHeight = window.innerHeight // 뷰포트 높이 값(100vh)

        if (deltaY > 0) {
            if (scrollTop >= 0 && scrollTop < pageHeight) {
                // 1페이지
                setScrollIndex(2)
                ref.current?.scrollTo({
                    top: pageHeight + DIVIDER_HEIGHT,
                    left: 0,
                    behavior: "smooth",
                })
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                // 2페이지
                setScrollIndex(3)
                ref.current?.scrollTo({
                    top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                    left: 0,
                    behavior: "smooth",
                })
            } else {
                // 3페이지
                setScrollIndex(3)
                ref.current?.scrollTo({
                    top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                    left: 0,
                    behavior: "smooth",
                })
            }
        } else {
            if (scrollTop >= 0 && scrollTop < pageHeight) {
                // 1페이지
                setScrollIndex(1)
                ref.current?.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                })
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                // 2페이지
                setScrollIndex(2)
                ref.current?.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                })
            } else {
                // 3페이지
                setScrollIndex(2)
                ref.current?.scrollTo({
                    top: pageHeight + DIVIDER_HEIGHT,
                    left: 0,
                    behavior: "smooth",
                })
            }
        }
    }, [])

    const containerRef = useWheel(wheelHandler)

    return (
        <div className="container" ref={containerRef}>
            <Dots scrollIndex={scrollIndex} />
            <div className="section bg1" />
            <div className="divider" />
            <div className="section bg2" />
            <div className="divider" />
            <div className="section bg3" />
        </div>
    )
}

export default Body
