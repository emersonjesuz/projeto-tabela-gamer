"use client";
import { motion } from "framer-motion";

export default function Animacao({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      {/* <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, repeat: 2 }}
      > */}
      {children}
      {/* </motion.div> */}
    </div>
  );
}
