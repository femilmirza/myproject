import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Animated Background Image */}
      <img
        src="/assets/hero.gif"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Dot & Cross Agency
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300"
        >
          A design-driven creative agency building brands, products, and experiences.
        </motion.p>
      </div>
    </section>
  );
}
