import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function ContactMe() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center"> 
          {`I have got just what you need. `}
          <span className="underline decoration-[#e656fa]/50">
            Lets Talk.
          </span> 
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#e656fa] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+34 672168850</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#e656fa] h-7 w-7 animate-pulse" />
            <p className="text-2xl">lvargas.sb@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#e656fa] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{`Working remotely 🚀`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;
