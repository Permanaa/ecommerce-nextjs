import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { getDetailProducts } from "../../_services";

const useActions = () => {
  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  const fetchDetail = async () => {
    setLoading(true)
    try {
      const result = await getDetailProducts(id)
      setData(result)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDetail()
  }, [])

  return {
    loading,
    data,
    router
  }
}

export default useActions;
