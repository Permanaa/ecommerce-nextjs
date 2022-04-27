import DetailComponent from "../../../containers/Product/Detail";
import { useSession } from "next-auth/react"
import AccessDenied from "../../../components/AccessDenied";

const ProductDetail = () => {
  const { data: session, status } = useSession()
  
  const loading = status === "loading"

  if (typeof window !== "undefined" && loading) return null

  if (!session) {
    return <AccessDenied />
  }

  return <DetailComponent />
}

export default ProductDetail
