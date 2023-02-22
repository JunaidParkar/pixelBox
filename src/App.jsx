import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthScreen from './pages/authScreen'
import GlobalPage from './pages/globalPage'
import MainPage from './pages/mainPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthScreen />} />
          <Route path='/box' element={<MainPage />} />
          <Route path='/global' element={<GlobalPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
