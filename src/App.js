import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NoteForm from './components/NoteForm'
import Header from './components/Header'
import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/form' element={<NoteForm/>} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App;