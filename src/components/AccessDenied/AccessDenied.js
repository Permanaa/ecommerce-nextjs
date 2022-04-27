import styles from "./styles.module.css"
import Link from "next/link"
import { motion } from "framer-motion"

const AccessDenied = () => {
  return(
    <motion.div
      className={styles.root}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.title}>
        Access Denied
      </div>
    </motion.div>
  )
}

export default AccessDenied
