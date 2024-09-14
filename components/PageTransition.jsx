"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


const PageTransition = ({ children }) => {
  const path = usePathname();
  return (
    <>
      <AnimatePresence>
        <div key={path}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0.4, duration: 0.2, ease: "easeIn" },
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
        </div>
        {children}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
