import { useCallback, useEffect, useState } from 'react'
import {
  getItemFromStorage,
  removeItemFromStorage,
  setItemToStorage,
} from '../../../shared'

interface IUser {
  email: string
  fullName: string
}

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState({})

  const login = useCallback((jwtToken: string, user: IUser) => {
      setToken(jwtToken)
      setUser(user)

      setItemToStorage('userData', { token: jwtToken, user: user })
    }, [])

  const logout = () => {
    setToken(null)
    setUser({})

    removeItemFromStorage('userData')
  }

  useEffect(() => {
    const userData = getItemFromStorage('userData')
    
    if (userData) {
      const { token, user } = userData
  
      if (token && user) {
        try {
          login(token, user)
        } catch (error) {
          console.error('Error parsing user data', error)
        }
      }
    }
  }, [login])
  
  return { login, logout, token, user }
}
