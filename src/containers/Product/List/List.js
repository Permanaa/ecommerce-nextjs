import { AnimatePresence, motion } from "framer-motion"
import styles from "./styles.module.css"
import Image from "next/image"
import { FiArrowLeft } from "react-icons/fi"
import useActions from "./hooks/useActions"
import cx from "classnames"

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

const stagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  },
}

const staggerListItem = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 }
}

const List = () => {
  const {
    router,
    setTab,
    tab,
    loading,
    list,
    redirectDetail
  } = useActions()

  const menuList = [
    {
      label: "Men",
      value: 7113
    },
    {
      label: "Women",
      value: 5906
    }
  ]

  const renderLoading = loading && (
    <motion.div
      style={{ margin: "4px 0 0 350px", fontSize: 24 }}
      {...loadingUp}
    >
      Loading...
    </motion.div>
  )

  const renderProductList = !loading && (
    <motion.div className={styles.listWrapper} {...fadeInUp}>
      {list.map(item => (
        <motion.div
          className={styles.listItem}
          key={item.id}
          onClick={() => redirectDetail(item.id)}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={`https://${item.imageUrl}`}
              width={256}
              height={326}
              objectFit="contain"
              alt="item"
            />
          </div>
          <span className={styles.price}>{item.price.current.text}</span>
          <span className={styles.title}>{item.name}</span>
        </motion.div>
      ))}
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
      <div className={styles.menuWrapper}>
        <motion.div
          className={styles.backButton}
          onClick={() => router.back()}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowLeft />&nbsp;
          Back
        </motion.div>
        <motion.div
          className={styles.menu}
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {menuList.map(item => (
            <motion.div
              key={item.value}
              className={cx(styles.menuItem, {[`${styles.activeMenu}`]: tab === item.value })}
              onClick={() => setTab(item.value)}
              variants={staggerListItem}
            >
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {renderLoading}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {renderProductList}
      </AnimatePresence>
    </motion.div>
  )
}

export default List