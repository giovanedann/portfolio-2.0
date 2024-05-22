'use client'

import { motion } from 'framer-motion'
import { CiMail } from "react-icons/ci";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

import { EffectText } from "@/components/EffectText";

export default function Home() {
  return (
    <main className="bg-black/80 flex min-h-screen flex-col items-center justify-center p-24">
      <EffectText className="font-bold" words="Giovane Saes" textSize="text-7xl" startDelay={1} />

      <EffectText className="mt-4 font-semibold" words="Software Engineer" textSize="text-3xl" startDelay={2} />

      <EffectText className="mt-2 font-normal" words="You think, i build." textSize="text-xl" startDelay={3.5} />

      <section className="mt-14 space-x-6 flex flex-row">
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 5.7, duration: 1 } }} href="https://github.com/giovanedann/" target="_blank" title="Github" className="p-2 rounded-full border border-white hover:scale-110 ease-in-out animate-all duration-300">
          <FaGithubAlt className="w-6 h-6" />
        </motion.a>

        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 5.9, duration: 1 } }} href="https://www.linkedin.com/in/giovanesaesdev/" target="_blank" title="LinkedIn" className="p-2 rounded-full border border-white hover:scale-110 ease-in-out animate-all duration-300">
          <FaLinkedin className="w-6 h-6" />
        </motion.a>

        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 6.1, duration: 1 } }} href="mailto:giovanes.dev@gmail.com" title="Email" className="p-2 rounded-full border border-white hover:scale-110 ease-in-out animate-all duration-300">
          <CiMail className="w-6 h-6" />
        </motion.a>
      </section>
    </main>
  );
}
