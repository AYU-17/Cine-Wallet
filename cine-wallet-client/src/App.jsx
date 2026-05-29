import { useState } from 'react'
import HomePage from './pages/HomePage'
// import './App.css'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold text-purple-500">
        <HomePage />
      </h1>
    </div>
  )
}

export default App
