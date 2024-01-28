import {useCallback, useState} from "react";
import invariant from "tiny-invariant";

export const useRequest = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url: string, method: string = 'GET', body: any = null, headers: any = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      invariant(response.ok, data.message || 'Something went wrong')

      setLoading(false)
      return data
    } catch (e: any) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  return {loading, request, error}
}