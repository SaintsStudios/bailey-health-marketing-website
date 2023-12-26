import Image from 'next/image'

export function Navbar() {
  return (
    <div className="fixed w-full border bg-transparent p-4">
      <Image
        src={'/logos/logo.png'}
        width={100}
        height={100}
        alt="Bailey Health Logo"
      />
      <h1 className="text-2xl">Bailey Health</h1>
    </div>
  )
}
