import ListComponent from "../../containers/Product/List";
import { useSession } from "next-auth/react"
import AccessDenied from "../../components/AccessDenied";

const Product = () => {
  const { data: session, status } = useSession()
  
  const loading = status === "loading"

  if (typeof window !== "undefined" && loading) return null

  if (!session) {
    return <AccessDenied />
  }

  return <ListComponent />
}

export default Product
