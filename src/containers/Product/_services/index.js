import fetch from "../../../utils/fetch"

export const getlistProducts = opt => {
  const options = {
    ...opt,
    method: "GET",
    url: "/products/v2/list",
  }
  return fetch(options)
}

export const getDetailProducts = id => {
  const options = {
    method: "GET",
    url: "/products/v3/detail",
    params: {
      id
    }
  }
  return fetch(options)
}
