import './App.css'
import {useState} from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import { Routes, Route, Link} from "react-router-dom"

const VITE_SOME_KEY = import.meta.env.VITE_SOME_KEY

function App() {
  // const [page, setPage] = useState("/")
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>{VITE_SOME_KEY}</div>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="about"  element={<About/>} />
        <Route path="*"  element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
