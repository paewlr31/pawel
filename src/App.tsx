import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-10 gap-6">
      
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24 hover:rotate-12 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 hover:rotate-12 transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-600">Vite + React + Tailwind</h1>

      <div className="card bg-white shadow-xl p-6 rounded-xl text-center">
        <button 
          className="btn btn-primary mb-4"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>

        <p className="text-gray-700">
          Edit <code className="text-red-500 font-bold">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-500 italic mt-4">
        If you see colors, rounded corners & button style — Tailwind works!
      </p>
    </div>
  )
}

export default App
