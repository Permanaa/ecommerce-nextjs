import { useEffect } from "react";
import { useRouter } from "next/router"
import DetailComponent from "../../../containers/Product/Detail";
import { useSession } from "next-auth/react"

const ProductDetail = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const loading = status === "loading"
  
  useEffect(() => {
    if (!session) {
      router.push("/")
    }
  }, [router, session])

  if (typeof window !== "undefined" && loading || !session) return null

  return <DetailComponent />
}

export default ProductDetail
