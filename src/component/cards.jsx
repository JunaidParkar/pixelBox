import React from 'react'
import folderIcon from "../assets/folderIcon.png"
import fileIcon from "../assets/fileIcon.png"
import renameIcon from "../assets/renameIcon.png"
import deleteIcon from "../assets/deleteIcon.png"
import downloadIcon from "../assets/downloadIcon.png"
import shareIcon from "../assets/shareIcon.png"

const Cards = (props) => {
  return (
    <>
        <div className="optionContainer" style={props.type != "neutral" ? {cursor: 'auto'} : {cursor: 'pointer'}}>
            <img src={props.type == "folder" ? folderIcon : props.type == "file" ? fileIcon : ""} style={props.type == "neutral" ? {display: 'none'} : {}} alt="" />
            <h1>{props.name}</h1>
            <div className="workOptionContainer" style={props.type == "neutral" ? {display: 'none'} : {}}>
                <img src={downloadIcon} style={props.type == "folder" ? {display: 'none'} : {}} alt="" />
                <img src={shareIcon} style={props.type == "folder" ? {display: 'none'} : {}} alt="" />
                <img src={renameIcon} alt="" />
                <img src={deleteIcon} alt="" />
            </div>
        </div>
    </>
  )
}

export default Cards
