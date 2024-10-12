"use client";

import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-montserrat text-3xl opacity-80"
        >
          Hi, my name is
        </motion.h1>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-montserrat mb-6 text-7xl font-bold text-light-accent dark:text-dark-accent"
        >
          Jerome Haynes
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-roboto mt-4 text-xl leading-relaxed"
        >
          I&apos;m a full-stack developer with a true passion for
          coding—especially when it comes to creating beautiful frontend
          experiences. Whether it&apos;s designing smooth interfaces or diving
          into backend development to make things work seamlessly, I love
          turning ideas into interactive realities.
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-roboto mt-4 text-xl leading-relaxed"
        >
          When I&apos;m not writing code, I&apos;m all about sports, gaming, and
          finding new ways to challenge myself. I&apos;m constantly seeking out
          the next opportunity to learn and grow. Curious to see more? Start
          Your Journey to explore my projects, skills, and story!
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/choose"
            className="mt-10 inline-block rounded-full bg-light-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:opacity-90 hover:shadow-xl dark:bg-dark-accent"
          >
            Explore My World
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="https://github.com/dev-rome"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <TbBrandGithub
              size={32}
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jerome-haynes/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <TbBrandLinkedin
              size={32}
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
