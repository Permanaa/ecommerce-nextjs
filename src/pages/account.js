import AccountComponent from "../containers/Account";
import { useSession } from "next-auth/react"
import AccessDenied from "../components/AccessDenied";

const Account = () => {
  const { data: session, status } = useSession()
  
  const loading = status === "loading"

  if (typeof window !== "undefined" && loading) return null

  if (!session) {
    return <AccessDenied />
  }

  return <AccountComponent />
}

export default Account
