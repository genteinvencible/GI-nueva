import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const NavbarReadingLight = ({ className }: { className?: string }) => {
  const warmLightColorMain = "from-amber-500 via-transparent to-transparent";
  const warmLightColorSecondary = "to-amber-500 via-transparent from-transparent";
  const warmOrbColor = "bg-orange-400";
  const warmLineColor = "bg-amber-300";

  const maskBgColor = "bg-[#f7f3ed] dark:bg-[#141210]";

  return (
    <div className={cn("absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-80", className)}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 mt-[-2rem]">

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className={cn("absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic text-white [--conic-position:from_70deg_at_center_top]", warmLightColorMain)}
        >
          <div className={cn("absolute w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]", maskBgColor)} />
          <div className={cn("absolute w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]", maskBgColor)} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className={cn("absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic text-white [--conic-position:from_290deg_at_center_top]", warmLightColorSecondary)}
        >
          <div className={cn("absolute w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]", maskBgColor)} />
          <div className={cn("absolute w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]", maskBgColor)} />
        </motion.div>

        <div className={cn("absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl", maskBgColor)}></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className={cn("absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-40 blur-3xl", warmOrbColor)}></div>

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={cn("absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl", warmOrbColor)}
        ></motion.div>

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={cn("absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]", warmLineColor)}
        ></motion.div>

        <div className={cn("absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]", maskBgColor)}></div>
      </div>
    </div>
  );
};
