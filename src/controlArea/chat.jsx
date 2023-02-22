import * as keyWords from "./keyWords"

export const entryQuery = async () => {
    const div = document.createElement("div")
    div.classList.add("message")
    div.classList.add("message-incoming")
    const h3 = document.createElement("h3")
    h3.innerText = "Hello user, How may I help you?"
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    const p4 = document.createElement("p")
    const p5 = document.createElement("p")
    p1.innerText = "* Login"
    p2.innerText = "* Register"
    p3.innerText = "* Verify email"
    p4.innerText = "* Forgot password"
    p5.innerText = "* Disable your account"
    div.appendChild(h3)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    div.appendChild(p5)
    // localStorage.setItem("operation", "entered")
    return div
}

export const loginQuery = (username = null, email = null) => {
    return "logging in"
}

export const LoginUser = (res, username, email) => {}

export const recognizeKeyWords = (key) => {
    let res = key.split(" ")
    let operation
    for (let i = 0; i < keyWords.login.length; i++) {
        for (let ii = 0; ii < res.length; ii++) {
            if (k[ii] == keyWords.login[i]) {
                operation = "login"
                // localStorage.setItem("operation", "login")
                const query = loginQuery()
                return query
            }
        }
    }
}