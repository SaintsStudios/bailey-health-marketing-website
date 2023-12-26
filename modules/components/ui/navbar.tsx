'use client'

import Image from 'next/image'

import Button from '@/modules/components/common/button'  

function Navbar() {
  const linkStyle = 'text-black hover:text-gray-500 cursor-pointer mx-4'

  return (
    <div className="fixed flex w-full flex-row border bg-transparent p-4">
      <Image
        src={'/logos/logo.png'}
        width={200}
        height={50}
        alt="Bailey Health Logo"
      />
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
    </div>
  )
}

export default Navbar
