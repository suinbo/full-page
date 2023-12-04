import styled, { css } from "styled-components"
import "./dots.scss"

type DotsProps = {
    $num: number
    $scrollIndex: number
}

const Dot = styled.div<DotsProps>`
    ${({ $num, $scrollIndex }) => css`
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid black;
        background-color: ${$scrollIndex === $num ? "black" : "transparent"};
        transition-duration: 1000;
        transition: background-color 0.5s;
    `}
`

const Dots = ({ scrollIndex }: { scrollIndex: number }) => {
    return (
        <div className="dots-container">
            <div className="dots-wrapper">
                {[...Array(3)].map((_, index) => (
                    <Dot key={index} $num={index + 1} $scrollIndex={scrollIndex} />
                ))}
            </div>
        </div>
    )
}

export default Dots
