import { useEffect } from "react";
import { useRouter } from "next/router"
import AccountComponent from "../containers/Account";
import { useSession } from "next-auth/react"

const Account = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const loading = status === "loading"
  
  useEffect(() => {
    if (!session) {
      router.push("/")
    }
  }, [router, session])

  if (typeof window !== "undefined" && loading || !session) return null

  return <AccountComponent />
}

export default Account
