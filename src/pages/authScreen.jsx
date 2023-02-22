import React, { useState, useEffect } from 'react';
import { entryQuery, recognizeKeyWords } from '../controlArea/chat';
// import { chatbot } from '../controlArea/chatbot';
import '../css/authScreen.css';

function AuthScreen() {

  const [messages, setMessages] = useState([])
  const [response, setResponse] = useState(null)
  const [userName, setUserName] = useState("");
  const [userEmail, setuserEmail] = useState("")
  const [operation, setOperation] = useState("")

  // useEffect(() => {
  //   // localStorage.clear()
  // }, []);

  // const first = async () => {
    // if (document.querySelector("#messages").innerHTML == "" || response.trim() == "help") {
    //   // fvf 
    // }
    // const firstQuery = () => {
    //   entryQuery().then(async e => {
    //     document.querySelector("#messages").appendChild(e)})
    //   }
      
    //   if (operation == "") {
    //   setOperation("entered")
    //   // setMessages
    //   firstQuery()
    // }
    
  // }
  // first()

  const showResponseInScreen = (res, source) => {
    let div = document.createElement("div")
    let p = document.createElement("p")
    div.classList.add("message")
    p.innerText = res
    div.appendChild(p)
    if (source == "user") {
      div.classList.add("message-outgoing")
    } else {
      div.classList.add("message-incoming")
    }
    document.querySelector("#messages").appendChild(div)
  }

  const handelResponse = (e, response) => {
    e.preventDefault()
    showResponseInScreen(response, "user")
    const query  = response.split(" ")
    if (operation == "") {
      for (let i = 0; i < query.length; i++) {
        if (query[i].trim() == "login" || query[i].trim() == "signin" || query[i].trim() == "in") {
          setOperation("login")
          showResponseInScreen("Enter your username")
        } else if (query[i].trim() == "register" || query[i].trim() == "signup" || query[i].trim() == "up"){
          setOperation("register")
        } else if (query[i].trim() == "verify" || query[i].trim() == "activate"){
          setOperation("verifyEmail")
        } else if (query[i].trim() == "forgot" || query[i].trim() == "reset" || query[i].trim() == "recreate" || query[i].trim() == "recover"){
          setOperation("recoverPassword")
        } else if (query[i].trim() == "disable" || query[i].trim() == "deactivate" || query[i].trim() == "close"){
          setOperation("deactivate")
        }
      }
    } else if (operation == "login") {}
  }

  console.log(operation)
  return (
    <div className="chat-screen">
      <div className="chat-messages" id='messages'>
        <div className="message message-incoming">
          <h3>Hello user, how can I help you with??</h3>
          <p>* Login</p>
          <p>* Register</p>
          <p>* Verify email</p>
          <p>* Forgot password</p>
          <p>* Disable account</p>
        </div>
      </div>
      <form className="chat-form" onSubmit={(e) => {handelResponse(e,response)}}>
        <input type="text" placeholder="Type your message here" onChange={e => setResponse(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default AuthScreen;
