import clsx from 'clsx'
import Image from 'next/image'
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
} from 'react-icons/ri'

function Footer() {
  return (
    <footer className="flex h-96 flex-col items-center justify-evenly bg-primary-50 p-8 lg:flex-row">
      <div className="w-1/2">
        <Image
          src={'/logos/logo.png'}
          width={300}
          height={50}
          alt="Bailey Health Logo"
        />
      </div>

      <div className="flex flex-row ">
        <div className="flex flex-col">
          <h2>About Us</h2>
          <p>Our Mission</p>
          <p>Our Team</p>
        </div>
        <div className="flex flex-col">
          <h2>Services</h2>
          <p>Service 1</p>
          <p>Service 2</p>
          <p>Service 3</p>
        </div>
        <div className="flex flex-col">
          <h2>Contact Us</h2>
          <p>Phone Number</p>
          <p>Email</p>
          <p>Address</p>
          <div className="flex flex-row">
            <RiInstagramFill
              color="white"
              className={clsx(
                'rounded-full bg-gradient-to-b from-[#6228d7] via-[#ee2a7b] to-[#f9ce34]',
                'cursor-pointer p-1 text-3xl transition-all duration-300 hover:scale-110'
              )}
            />
            <RiFacebookBoxFill
              color="white"
              className={clsx(
                'rounded-full bg-[#4267B2] p-1 text-3xl',
                'cursor-pointer transition-all duration-300 hover:scale-110'
              )}
            />
            <RiTwitterFill
              color="white"
              className={clsx(
                'rounded-full bg-[#1DA1F2] p-1 text-2xl text-3xl',
                'cursor-pointer transition-all duration-300 hover:scale-110'
              )}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
