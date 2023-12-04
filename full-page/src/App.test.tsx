import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders full-page", () => {
    render(<App />)
    const linkElement = screen.getByText(/full-page/i)
    expect(linkElement).toBeInTheDocument()
})
