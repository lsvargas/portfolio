import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../BackgroundCircles";
import CoolImage from "../CoolImage";

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Leopoldo Vargas",
      "here you can learn more about me :)",
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <CoolImage
        containerClasses="h-32 w-32"
        src="https://i.imgur.com/dJnWMcP.png"
        layout="fill"
        className="rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase tracking-[12px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7BA0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
