import Image from "next/image"
import classNames from "classnames";
import { motion } from "framer-motion";

type Props = {
  containerClasses?: string;
  src: string;
  layout?: any;
  className?: string;
  initial?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
}

function CoolImage({
  containerClasses,
  whileInView,
  initial,
  transition,
  ...imageProps 
}: Props) {
  return (
    <motion.div
      className={classNames("relative", containerClasses)}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    >
      <Image {...imageProps} alt="" />
    </motion.div>
  )
}

export default CoolImage
