import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Type here" />)
    expect(screen.getByPlaceholderText(/type here/i)).toBeInTheDocument()
  })
  it('calls onChange', () => {
    const onChange = vi.fn()
    render(<Input onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'abc' } })
    expect(onChange).toHaveBeenCalled()
  })
})
