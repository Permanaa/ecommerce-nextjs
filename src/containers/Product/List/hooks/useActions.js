import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { getlistProducts } from "../../_services"

const useActions = () => {
  const router = useRouter()
  const { gender } = router.query

  const categoryId = Number(gender)

  const [loading, setloading] = useState(false);
  const [tab, setTab] = useState(categoryId)
  const [list, setList] = useState([])

  const fetchProductList = async () => {
    const params = {
      store: 'US',
      offset: '0',
      limit: '10',
      categoryId: tab
    }

    setloading(true)
    try {
      const result = await getlistProducts({ params })
      if (result?.products) {
        setList(result.products)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }

  const redirectDetail = (id) => {
    router.push(`/product/detail/${id}`)
  }

  useEffect(() => {
    fetchProductList()
  }, [tab])

  return {
    tab,
    setTab,
    gender,
    router,
    loading,
    list,
    redirectDetail
  }
}

export default useActions
