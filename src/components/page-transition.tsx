"use client";
import { motion } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeInOut", duration: 0.3 }}
    className="flex-1 p-4 sm:p-6"
  >
    {children}
  </motion.main>
);
