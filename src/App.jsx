import Header from './components/Header/Header'
// import './App.css'
import Player from './components/Player/Player'
import Board from './components/Board/Board'

function App() {
  return (
    <>
      <Header />
    <div className='container'>
      <Player whichPlayer='X'/>
      <Player whichPlayer='O'/>
      </div>
      <Board />
    </>
  )
}

export default App
