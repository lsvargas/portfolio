import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../../utils/constants/projects";
import CoolImage from "../CoolImage";

type Props = {}

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#e656fa]/60">
        {projects.map(({ title, description, imageUrl, technologiesIcons }, index) => (
          <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <CoolImage
              containerClasses="min-h-[300px] min-w-[350px] md:h-[375px] md:w-[600px]"
              src={imageUrl}
              layout="fill"
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
             />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center"> 
                <span className="underline decoration-[#e656fa]/50">
                  {`Case Study ${index + 1} of ${projects.length}: `}
                </span> 
                {title}
              </h4>
              <div className="flex justify-center space-x-2 my-2">
                {technologiesIcons.map((tIcon, index) => (
                  <div key={index} className="h-10 w-10 relative">
                    <Image
                      src={tIcon}
                      layout="fill"
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {description}
              </p>
            </div>
          </div>
        ))}

      </div>

      <div className="w-full absolute top-[30%] bg-[#e656fa]/10 left-0 h-[500px] -skew-y-12"  />
    </motion.div>
  )
}

export default Projects;
