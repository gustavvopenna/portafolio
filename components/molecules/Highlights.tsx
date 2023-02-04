import { motion, MotionValue, useTransform } from "framer-motion";

interface HighlightsProps {
  x: MotionValue,
  y: MotionValue
}

export default function Highlights({ x, y }: HighlightsProps) {

  const translateX = useTransform(x, [0, 1000], [-200, 700])
  const translateY = useTransform(y, [0, 5000], [-200, 3800])

  return (
    <>
      <motion.div
        className="z-0 absolute bg-fuchsia-700 w-[40vw] h-[50vh] blur-[100px]"
        style={{
          translateX,
          translateY
        }}
      />
      <motion.div
        className="z-0 absolute bg-indigo-700 w-[40vw] h-[50vh] blur-[100px] left-[400px]"
        style={{
          translateX,
          translateY
        }}
      />
    </>
  )
}
