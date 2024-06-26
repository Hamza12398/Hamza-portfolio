"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const path = usePathname();
  return (
    <>
    <AnimatePresence mode="wait">
      <div key={path}>
        <div className="w-screen h-screen fixed right-0 left-0 z-40 flex top-0 pointer-events-none">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
    </>
);
};

export default StairTransition;
