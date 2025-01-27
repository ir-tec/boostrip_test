"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, y: -50 },
  };
  
const AnimateLayout = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    console.log("test");
  }, [children]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="h-full w-full"
        key={`${children?.toLocaleString()}`}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ position: 'relative', height: '100vh' }} // Ensures full-screen transition
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateLayout;
