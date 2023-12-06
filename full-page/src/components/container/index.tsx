import React, { useCallback, useState } from "react"
import Dots from "./dots"
import useWheel from "../../hooks/useWheel"
import "./style.scss"

const DIVIDER_HEIGHT = 5

const Body = () => {
    const [scrollIndex, setScrollIndex] = useState<number>(1)

    const wheelHandler = useCallback((ref: React.RefObject<HTMLDivElement>, deltaY: number, scrollTop: number) => {
        const innerHeight = window.innerHeight // 뷰포트 높이 값(100vh)

        const getPageDetails = (scrollTop: number) => {
            const scrollPageIndex = Math.floor(scrollTop / innerHeight)
            const scrollOffset = deltaY > 0 ? 1 : -1
            const dest = Math.max(0, Math.min(scrollPageIndex + scrollOffset, 2)) // 범위: [0, 1, 2]

            return { index: dest + 1, top: (innerHeight + DIVIDER_HEIGHT) * dest } // index: 페이지 번호, top: 스크롤하여 이동할 페이지의 최상단
        }

        const { index, top } = getPageDetails(scrollTop)
        setScrollIndex(index)

        ref.current?.scrollTo({
            top,
            left: 0,
            behavior: "smooth",
        })
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
