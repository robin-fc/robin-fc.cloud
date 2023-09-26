import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import React from 'react'

export function Root() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
