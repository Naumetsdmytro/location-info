import { Home, Main } from '../pages'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../features/auth'
import { Register } from '../features/auth'
import { NavLayout } from '../pages/layout/NavLayout'
import { Error404 } from '../shared'

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <NavLayout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </NavLayout>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<NavLayout><Home /></NavLayout>} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
