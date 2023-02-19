import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/navbar'
import "../css/main.css"

const MainPage = () => {

  const navigate = useNavigate()


  return (
    <>
        <div className="MainPageContainer">
            <Navbar />
            <div className="managerContainer">
              <div className="optionContainer" onClick={() => navigate("/global")}>
                <h1>global server</h1>
              </div>
              <div className="optionContainer">
                <h1>Shared</h1>
              </div>
              <div className="optionContainer">
                <h1>my files</h1>
              </div>
            </div>
        </div>
    </>
  )
}

export default MainPage
