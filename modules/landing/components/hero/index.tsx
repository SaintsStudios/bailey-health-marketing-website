import clsx from 'clsx'
import Image from 'next/image'

import useScreenDimensions from '@/hooks/useDimensions'
import { Breakpoints } from '@/lib/constants'
import Button from '@/modules/components/common/button'
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
} from 'react-icons/ri'

function Hero() {
  const { width } = useScreenDimensions()

  const contentContainer = clsx('flex h-5/6 flex-col', {
    'w-full': width < Breakpoints.LG,
    'w-1/2': width > Breakpoints.LG,
  })
  const headerText = 'text-4xl font-bold my-4'

  return (
    <div
      className={clsx(
        'absolute flex h-[100svh] w-full items-end justify-between'
      )}
    >
      <div className={clsx(contentContainer, 'items-start justify-center p-6')}>
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
        <div className={clsx(contentContainer, 'relative justify-end')}>
          <Image
            src={'/images/landing/hero.png'}
            alt="hero image"
            width={1000}
            height={0}
            className="h-auto"
          />

          <div className="absolute left-10 top-10 h-40 w-80 rounded-sm bg-secondary-200/80 px-4 py-6">
            <h2 className="text-lg font-bold">Have Questions?</h2>
            <h1 className="text-xl font-bold">Call Us {'(000) 123-1234'}</h1>

            <div className="my-4 h-0.5 w-full rounded-lg bg-secondary-100" />

            <div className="flex flex-row items-center justify-evenly">
              <RiInstagramFill
                color="white"
                className="rounded-full bg-gradient-to-b from-[#6228d7] via-[#ee2a7b] to-[#f9ce34] p-1 text-3xl"
              />
              <RiFacebookBoxFill
                color="white"
                className="rounded-full bg-[#4267B2] p-1 text-3xl"
              />
              <RiTwitterFill
                color="white"
                className="rounded-full bg-[#1DA1F2] p-1 text-2xl text-3xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
