'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { CgMenuMotion as MenuIcon } from 'react-icons/cg'

import useScreenDimensions from '@/hooks/useDimensions'
import { Breakpoints } from '@/lib/constants'
import Button from '@/modules/components/common/button'

// Styles for the navbar
const linkStyle = 'text-black hover:text-gray-500 cursor-pointer mx-4'

function MobileMenu({ isOpen }: { isOpen?: boolean }) {
  return (
    <div
      className={clsx(
        'absolute left-0 top-36 flex h-80 w-full flex-col items-center justify-center border bg-white',
        // {
        //   isOpen: 'h-96',
        // }
      )}
    >
      <h2>Home</h2>
      <h2>About Us</h2>
      <h2>Services</h2>
      <Button
        className="bg-primary-500 text-white"
        onClick={() => console.log('clicked')}
      >
        Get Started
      </Button>
    </div>
  )
}

function DesktopMenu() {
  return (
    <div className="flex w-full items-center border border-black px-4">
      <div className="flex flex-row">
        <h2 className={linkStyle}>Home</h2>
        <h2 className={linkStyle}>About Us</h2>
        <h2 className={linkStyle}>Services</h2>
      </div>

      <div className="ml-auto flex flex-row">
        <Button
          className="bg-primary-500 text-white"
          onClick={() => console.log('clicked')}
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const { width } = useScreenDimensions()

  return (
    <div className="fixed relative flex w-full flex-row items-center p-8">
      <Image
        src={'/logos/logo.png'}
        width={200}
        height={50}
        alt="Bailey Health Logo"
      />
      {width > Breakpoints.MD && width !== 0 && <DesktopMenu />}
      {width <= Breakpoints.MD && width !== 0 && (
        <div
          className="ml-auto flex flex-row"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <MenuIcon size={40} />
        </div>
      )}
      {
        // Mobile Menu
        showMobileMenu && <MobileMenu isOpen={showMobileMenu} />
      }
    </div>
  )
}

export default Navbar
