import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Location from './components/Location'
import Home from './components/Home'
function App() {
  const [content, setContent] = useState(<Home />)
  const showLoc = () => {
    setContent(<Location />)
  }
  const showMenu = () => {
    setContent(<Main />)
  }
  const showHome = () => {
    setContent(<Home />)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Header showLocation={showLoc} showMenu={showMenu} showHome={showHome} />
      {content}
      <footer>
        <h2>Copyright © Restaurant 2022</h2>
      </footer>
    </div>
  )
}
export default App
