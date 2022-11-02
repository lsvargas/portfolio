import Image from 'next/image'
import IExperience from '../../types/experience.type'
import CoolImage from '../CoolImage'

type Props = {
  experience: IExperience
}

function ExperienceCard({ experience }: Props) {
  const {
    jobTitle,
    companyName,
    summaryPoints,
    jobDuration,
    imageUrl,
    technologiesIcons
  } = experience;

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">   
      <CoolImage
        containerClasses="h-32 w-32 xl:w-[200px] xl:h-[200px]"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={imageUrl}
        layout="fill"
        className="rounded-full object-center object-cover"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold">{companyName}</p>

        <div className="flex space-x-2 my-2">
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

        <p className="uppercase py-5 text-gray-300">
          {jobDuration}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-56 max-w-56 overflow-x-scroll overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#e656fa]/60">
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

    </article>
  )
}

export default ExperienceCard
