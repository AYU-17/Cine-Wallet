import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { MovieProvider } from './context/MovieContext.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
  <MovieProvider>
    <AppRoutes />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#0F172A",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      }}
    />
  </MovieProvider>
  </QueryClientProvider>
  </StrictMode>,
)
