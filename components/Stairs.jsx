import React from 'react'
import { motion } from "framer-motion"

const stairsAnimations = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%"
  },
  exit: {
    top: ["100%", "0%"],
  }
}
const reverseIndex = () => {
  const totalSteps = 30
  return totalSteps - i - 1;
}

const  Stairs = () => {
  return (
    <>
    {[...Array(6)].map((_, i) => (
      <motion.div variants={stairsAnimations} initial="initial" animate="animate" exit="exit" className="" key={i} />
    ))}
      </>
  )
}

export default Stairs