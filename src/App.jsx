import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aspernatur excepturi, quae ea officia quibusdam. Quidem modi expedita cupiditate, numquam quis magni odio? Itaque eos cupiditate ducimus culpa corrupti accusantium?</p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Albert</li>
      </ul>
      <button>Hello</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quo culpa voluptates in? Quas voluptatem natus corporis, labore dicta explicabo, doloremque dolor nam at blanditiis ea! Dolorem odio laboriosam esse?</p>
      <p>Jambo</p>
    </>
  )
}

export default App
