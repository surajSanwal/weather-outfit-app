import { memo, type InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = memo((props: InputProps) => (
  <input
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    aria-label="City name"
    {...props}
  />
))

export default Input
