import { useEffect } from "react";
import { useRouter } from "next/router"
import ListComponent from "../../containers/Product/List";
import { useSession } from "next-auth/react"

const Product = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const loading = status === "loading"
  
  useEffect(() => {
    if (!session) {
      router.push("/")
    }
  }, [router, session])

  if (typeof window !== "undefined" && loading || !session) return null

  return <ListComponent />
}

export default Product
