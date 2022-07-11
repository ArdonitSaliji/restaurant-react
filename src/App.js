import Header from './components/Navbar'
import Main from './components/Main'
import Location from './components/Location'
import Home from './components/Home'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/menu' element={<Main />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <footer>
        <h2>Copyright © Restaurant 2022</h2>
      </footer>
    </div>
  )
}
export default App
