import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const buttonStyle = clsx(
    'rounded-md px-4 py-2',
    'hover:bg-opacity-80 transition-all duration-200',
    'active:outline-none active:ring-2 focus:ring-offset-2 active:ring-primary-500 active:scale-105',
    variant === 'primary' && 'bg-primary-500 text-white',
    variant === 'secondary' && 'bg-transparent text-black border border-black'
  )

  return (
    <button {...props} className={clsx(buttonStyle, props.className)}>
      {children}
    </button>
  )
}

export default Button
