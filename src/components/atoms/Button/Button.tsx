import { type ButtonHTMLAttributes, memo } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = memo(({ children, ...props }: ButtonProps) => (
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    {...props}
  >
    {children}
  </button>
))

export default Button
