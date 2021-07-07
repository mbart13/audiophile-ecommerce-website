import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

type FadeInOnScrollProps = {
  transition?: { duration: number; delay: number; ease: string }
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  transition = { ease: 'easeOut', duration: 1 },
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnScroll
