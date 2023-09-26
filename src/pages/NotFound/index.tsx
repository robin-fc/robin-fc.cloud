import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => (
  <div className="w-full h-full m-auto fcc-center bg-transparent">
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="flex items-center text-2xl font-bold">404</div>
    </div>
    <NavLink to="/home" replace />
  </div>
)

export default NotFound
