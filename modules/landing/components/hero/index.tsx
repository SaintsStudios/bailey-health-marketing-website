import clsx from 'clsx'

import useScreenDimensions from '@/hooks/useDimensions'
import { Breakpoints } from '@/lib/constants'
import Button from '@/modules/components/common/button'

function Hero() {
  const { width } = useScreenDimensions()

  const contentContainer = clsx(
    'flex h-5/6 flex-col items-center justify-center border border-black',
    {
      'w-full': width < Breakpoints.LG,
      'w-1/2': width > Breakpoints.LG,
    }
  )
  const headerText = 'text-4xl font-bold my-4'

  return (
    <div
      className={clsx(
        'absolute flex h-[100svh] w-full items-end justify-between'
        // 'left-0 top-0 bg-tertiary-400'
      )}
    >
      <div className={contentContainer}>
        <div className={clsx('flex flex-col items-start')}>
          <h1 className={headerText}>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices cursus libero, a tempor erat egestas sit amet. Ut vitae
            lectus porttitor, varius urna sed, interdum leo.
          </p>
        </div>
        <div className="my-6 flex w-3/4 flex-row items-start">
          <Button
            className="mr-4 bg-primary-500 text-white"
            onClick={() => console.log('clicked')}
          >
            Get Started
          </Button>
          <Button
            className="bg-transparent text-black"
            onClick={() => console.log('clicked')}
          >
            Learn More
          </Button>
        </div>
      </div>

      {width > Breakpoints.MD && (
        <div className={contentContainer}>
          <h1>Image</h1>
        </div>
      )}
    </div>
  )
}

export default Hero
