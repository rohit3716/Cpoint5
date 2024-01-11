
import { ToastContainer } from 'react-toastify'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddList from './pages/AddList'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div className='App'>
  <ToastContainer position='top-center' />
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path='/addList' element={<AddList/>} />
    <Route exact path='/update/:id' element={<AddList/>} />
  </Routes>
    {/* Hello Vite */}
  </div>
  )
}

export default App
