import useActions from "./hooks/useActions"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowLeft } from "react-icons/fi"
import styles from "./styles.module.css"
import Image from "next/image"

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing, delay: 0.3 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.3
    }
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.1 }
  },
};

const loadingUp = {
  ...fadeInUp,
  exit: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

const Detail = () => {
  const {
    loading,
    data,
    router
  } = useActions()

  const renderLoading = loading && (
    <motion.div
      style={{ margin: "4px 0 0 350px", fontSize: 24 }}
      {...loadingUp}
    >
      Loading...
    </motion.div>
  )

  const renderDetail = !loading && (
    <motion.div className={styles.detailWrapper} {...fadeInUp}>
      <div className={styles.imageWrapper}>
        {data.media.images.map((item, index) => (
          <Image src={`https://${item.url}`} width={314} height={400} alt={item.type} key={index} />
        ))}
      </div>
      <div>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.price}>{data.price.current.text}</div>
        <div dangerouslySetInnerHTML={{ __html: data.info.aboutMe }} />
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        <div dangerouslySetInnerHTML={{ __html: data.info.sizeAndFit }} />
      </div>
    </motion.div>
  )

  return (
    <motion.div
      className={styles.root}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={styles.backButton}
        onClick={() => router.back()}
        whileTap={{ scale: 0.9 }}
      >
        <FiArrowLeft />&nbsp;
        Back
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {renderLoading}
      </AnimatePresence>
      {renderDetail}
    </motion.div>
  )
}

export default Detail
