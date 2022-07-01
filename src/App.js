import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Location from './components/Location'
function App() {
  const [content, setContent] = useState(<Main />)
  const showLoc = () => {
    setContent(<Location />)
  }
  const showMenu = () => {
    setContent(<Main />)
  }

  return (
    <div>
      <Header data={showLoc} data2={showMenu} />
      {content}
    </div>
  )
}
export default App
