/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import "./App.css"

//component file
import AppContainer from "./AppContainer"
ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
    <AppContainer />
    </BrowserRouter>      
    </React.StrictMode>, 
    document.getElementById("root")
)

/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/