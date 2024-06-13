import { useState } from 'react'
import reactLogo from './assets/react.svg'


import './index.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-700 flex items-center justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          
        </a>
        <a href="https://react.dev" target="_blank">
          
        </a>
      </div>
      <h1 className='text-red-600 flex items-center justify-center'>Vite + React</h1>
      <div className="card flex items-center justify-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs flex items-center justify-center text-lime-700">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
