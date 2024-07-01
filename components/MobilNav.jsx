"use client";


import React from 'react'
import {Sheet, SheetContent, SheetTrigger} from "./ui/sheet"
import {usePathname} from "next/navigation"

const MobilNav = () => {
  return (
    <nav>
      <Sheet />
    </nav>
  )
}

export default MobilNav;
