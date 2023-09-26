import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'

export function Root() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
