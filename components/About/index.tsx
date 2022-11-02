import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >        
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="https://i.imgur.com/nvMIDFH.png"
        alt="aboutProfile"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="-mb-20 md:mb-0 w-56 h-56 md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] rounded-full object-cover md:rounded-lg flex-shrink-0"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#e656fa]">little</span> background
        </h4>
        <p className="text-base">
          I have been a fullstack software engineer for about 4 years, I have experience working in product driven companies, startups and outsourcing companies.
          I enjoy working in side projects that will help people and at the same time have to do with things that matter to me and that I like. For
          example sports that I have been practicing since I am little and continue to do so on my free time.
        </p>
      </div>
    </motion.div>
  )
}

export default About
