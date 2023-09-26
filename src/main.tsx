import React, { StrictMode, Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './index.css'
import { render } from 'react-dom'
import Home from './pages/Home'

render(
  <StrictMode>
    <Suspense fallback={null}>
      <Home />
    </Suspense>
    <Loader />
  </StrictMode>,
  document.getElementById('root') as HTMLElement,
)
