import { useRoutes } from './proccess/routes'
import { AuthContext } from './features/auth/context/AuthContext'
import { useAuth } from './features/auth/hooks/useAuth'
import { ThemeState } from './shared/hooks/useTheme'

const App = () => {
  const { token, user, logout, login } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  return (
    <>
    <AuthContext.Provider value={{ token, user: { email: '', fullName: '' }, logout, login, isAuthenticated }}>
    <ThemeState>
      {routes}
    </ThemeState>
    </AuthContext.Provider>
    </>
  )
}

export default App;