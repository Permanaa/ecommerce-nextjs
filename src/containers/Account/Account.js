import { signOut } from "next-auth/react"
import styles from "./styles.module.css"

const Account = () => {
  return (
    <div className={styles.root}>
      <div
        className={styles.btnSignOut}
        onClick={() => signOut()}
      >
        Sign out
      </div>
    </div>
  )
}

export default Account;
