import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Location from './components/Location'
import Ballina from './components/Ballina'
function App() {
  const [content, setContent] = useState(<Ballina />)
  const showLoc = () => {
    setContent(<Location />)
  }
  const showMenu = () => {
    setContent(<Main />)
  }
  const showBallina = () => {
    setContent(<Ballina />)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Header showLocation={showLoc} showMenu={showMenu} showBallina={showBallina} />
      {content}
      <footer>
        <h2>Copyright © Ulqin 2022</h2>
      </footer>
    </div>
  )
}
export default App
