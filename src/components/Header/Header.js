import { useRouter } from "next/router"
import Image from "next/image"
import styles from "./styles.module.css"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"

const Header = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const loading = status === "loading"

  return (
    <div className={styles.root}>
      <div onClick={() => router.push("/")}>
        <div className={styles.title}>
          Lulu Portofolio Series
        </div>
        <div className={styles.titleSeries}>
          E-Commerce
          <div className={styles.line}/>
        </div>
      </div>
      <div className={styles.accountWrapper}>
        {(!session && !loading) && (
          <div onClick={() => signIn("google")} style={{ cursor: "pointer" }}>Sign In</div>
        )}
        {(session?.user && !loading) && (
          <Link href="/account">
            <a>
              <div className={styles.account}>
                <div className={styles.accountInfo}>
                  <strong>{session.user.email ?? session.user.name}</strong>
                  <span>ini kamu</span>
                </div>
                <Image src={session.user.image} width={50} height={50} alt="user image" className={styles.accountImage} />
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header;
