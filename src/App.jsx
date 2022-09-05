import { Route, Routes } from 'react-router-dom'

import AdviceLayout from './templates/AdviceLayout'

import './App.css'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AdviceLayout/>} />
      </Routes>
    </div>
  )
}

export default App
