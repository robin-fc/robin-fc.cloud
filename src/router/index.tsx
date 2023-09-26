import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './Root'
import React from 'react'

const router = createBrowserRouter([{ path: '*', element: Root() }])

export default function RouterEntrance() {
  return <RouterProvider router={router} />
}
