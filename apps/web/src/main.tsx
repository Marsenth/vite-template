import { RouterProvider } from '@tanstack/router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import './styles.css'

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}