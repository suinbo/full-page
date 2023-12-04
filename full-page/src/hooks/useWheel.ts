import React, { useEffect, useRef } from "react"

type CallbackType = (ref: React.RefObject<HTMLDivElement>, deltaY: number, scrollTop: number) => void

/**
 * 마우스 휠을 감지하여 콜백함수를 처리할 수 있는 ref 객체를 반환하는 커스텀 훅.
 * @param callback (deltaY: 수직 방향 스크롤 움직임 크기(px) , scrollTop: 스크롤 최상단 위치)
 */
const useWheel = (callback: CallbackType): React.RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseWheel = (e: WheelEvent) => {
        e.preventDefault()
        callback(ref, e.deltaY, ref.current?.scrollTop!)
    }

    useEffect(() => {
        const currentRef = ref.current

        if (currentRef) {
            currentRef.addEventListener("wheel", handleMouseWheel)
        }

        return () => {
            // 컴포넌트 언마운트 시 이벤트 핸들러 제거 (메모리 누수 방지)
            if (currentRef) {
                currentRef.removeEventListener("wheel", handleMouseWheel)
            }
        }
    }, [ref, callback])

    return ref
}

export default useWheel
