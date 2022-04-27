import { useState } from "react"
import styles from "./styles.module.css"
import cx from "classnames"
import { FiArrowRight } from "react-icons/fi"
import { motion } from "framer-motion"
import Link from "next/link"

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeUp = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1
  },
  exit: {
    x: 400,
    transition: { duration: 0.4, delay: 0.1 }
  },
  transition: { duration: 1, ease: easing }
}

const Landingpage = () => {
  const [isShown, setIsShown] = useState("");
  return (
    <motion.div
      className={styles.root}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 60 }}
      exit={{
        opacity: 0.5,
        x: -1500,
        transition: { duration: 0.6, delay: 0.1 }
      }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.titleWrapper}>
        <div className={styles.rightTitleWrapper}>
          <div className={styles.smallTitle}>{"Let's Find"}</div>
          <div className={styles.smallTitle}>{"That"}</div>
        </div>
        <motion.div className={styles.bigTitle} {...fadeUp}>{"Suits"}</motion.div>
        <div>
          <div style={{ color: "transparent" }} className={styles.smallTitle}>space</div>
          <div className={cx(styles.leftSmallTitle, styles.smallTitle)}>{"You"}</div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Link href="/product/7113">
          <a>
            <motion.div
              className={styles.startButton}
              onMouseEnter={() => setIsShown("men")}
              onMouseLeave={() => setIsShown("")}
              whileTap={{ scale: 0.8 }}
              exit={{
                x: -600,
                transition: { duration: 0.9, delay: 0.1 }
              }}
            >
              {"Men's"}
              {isShown === "men" && <FiArrowRight />}
            </motion.div>
          </a>
        </Link>
        <Link href="/product/5906">
          <a>
            <motion.div
              className={styles.startButton}
              onMouseEnter={() => setIsShown("women")}
              onMouseLeave={() => setIsShown("")}
              whileTap={{ scale: 0.9 }}
              exit={{
                x: -600,
                transition: { duration: 0.2, delay: 0.3 }
              }}
            >
              {"Women's"}
              {isShown === "women" && <FiArrowRight />}
            </motion.div>
          </a>
        </Link>
      </div>
    </motion.div>
  )
}

export default Landingpage;