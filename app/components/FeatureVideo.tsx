"use client";

import { motion } from "framer-motion";

export default function FeatureVideo() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-primary text-center text-3xl md:text-4xl font-semibold mb-8 dark:text-primary"
      >
        Video nổi bật
      </motion.h2>

      <motion.div
        className="aspect-video w-full md:w-3/4 mx-auto rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <iframe
          className="w-full h-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          src="https://www.youtube.com/embed/q-YzHC6m7Po"
          title="Health Video"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </section>
  );
}
