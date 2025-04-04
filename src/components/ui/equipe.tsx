"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";

// Tipagem para os itens de testimonials
interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

// Tipagem para as props do componente
interface EquipeProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

const EquipeComponent: React.FC<EquipeProps> = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <section className="relative w-full py-4 max-w-5xl mx-auto">
      <div className=" relative grid grid-cols-1 md:grid-cols-2">
        {/* Imagem */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: active === index ? 1 : 0.7,
                  scale: active === index ? 1 : 0.95,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute inset-0 ${
                  active === index ? "z-10" : "z-0"
                }`}
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  className="h-full rounded-2xl object-cover w-72"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-medium text-zinc-200">{testimonials[active].name}</h3>
            <p className="text-sm text-zinc-400">
              {testimonials[active].designation}
            </p>
            <p className="text-sm text-zinc-600 mt-5">
              {testimonials[active].quote}
            </p>
            <p className="text-sm text-zinc-400 mt-5">
              Sequir em:
            </p>
          </motion.div>

          {/* Botões */}
          <div className="flex gap-4 pt-8 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-200 flex items-center justify-center"
            >
              <MdKeyboardArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-200 flex items-center justify-center"
            >
              <MdKeyboardArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipeComponent;