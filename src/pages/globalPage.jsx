import React from 'react'
import Cards from '../component/cards'
import Navbar from '../component/navbar'
import "../css/globalPage.css"

const GlobalPage = () => {
  return (
    <>
        <div className="MainPageContainer">
            <Navbar />
            <div className="managerContainer">
                <Cards name={".."} type={"neutral"} />
                <Cards name={"hello"} type={"folder"} />
                <Cards name={"gmail lists"} type={"folder"} />
                <Cards name={"passwords.txt"} type={"file"} />
                <Cards name={"gmail.txt"} type={"file"} />
            </div>
        </div>
    </>
  )
}

export default GlobalPage
