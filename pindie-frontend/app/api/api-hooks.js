import { useEffect, useState } from 'react'
import { getNormalizedGamesDataByCategory, isResponseOK} from './api-utils'

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category)
      setData(data)
    }
    fetchData()
  }, [])
  return isResponseOk(data) ? normalizeData(data) : data
}
