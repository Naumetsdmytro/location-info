import { useRoutes } from './proccess/routes'
import { AuthContext } from './features/auth/context/AuthContext'
import { useAuth } from './features/auth/hooks/useAuth'

const App = () => {
  const { token, user, logout, login } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{ token, user: { email: '', fullName: '' }, logout, login, isAuthenticated }}>
      {routes}
    </AuthContext.Provider>
  )
}

export default App;