import CoolImage from "../CoolImage"

type Props = {
  directionValue?: number,
  imageUrl: string,
  experience: string
}

function Skill({ directionValue, imageUrl, experience }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <CoolImage
        containerClasses="w-24 h-24 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{ x: directionValue, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={imageUrl}
        layout="fill"
        className="rounded-full border border-gray-500 object-cover"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{experience}</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
