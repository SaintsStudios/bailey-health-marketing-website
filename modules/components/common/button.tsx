type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}

export default Button
