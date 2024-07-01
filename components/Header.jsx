import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobilNav from './MobilNav'

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items center">
        {/* // ! Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Hamza<spran className="text-accent">.</spran>
          </h1>
        </Link>

        {/* // ! Desktop Navbar */}
        <div className="hidden xl:flex items-center gap-7">
          <Nav />
          <Link href="/content" className="">
            <Button>Hire Me</Button>
          </Link>
        </div>


        {/* //! mobile nav */}
          <div className="xl:hidden">
            <MobilNav />
          </div>


      </div>
    </header>
  )
}

export default Header