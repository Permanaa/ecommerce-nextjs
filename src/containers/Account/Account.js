import { signOut } from "next-auth/react"
import styles from "./styles.module.css"

const Account = () => {
  return (
    <div className={styles.root}>
      <div onClick={() => signOut()}>Keluar</div>
    </div>
  )
}

export default Account;
