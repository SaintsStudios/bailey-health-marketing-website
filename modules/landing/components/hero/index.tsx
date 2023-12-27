import clsx from 'clsx'

function Hero() {
  return (
    <div
      className={clsx(
        'absolute flex h-[100svh] w-full items-center justify-center',
        // 'left-0 top-0 bg-tertiary-400'
      )}
    >
      <h1 className="text-2xl">hero</h1>
    </div>
  )
}

export default Hero
