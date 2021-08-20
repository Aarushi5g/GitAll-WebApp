/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/

import React from "react"

import {BiHomeHeart} from "react-icons/bi"
import {BsStarFill} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"

function Header() {
  return (
    <div className="header">
      <header>
          <a style={{textDecoration: "none", color:"white"}} href="/" className="home">

          <img style={{display:"inline", width:"33px", marginTop:"12px", marginRight:"10px", 
          marginLeft:"10px"}} 
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2351%2FPNG%2F512%2Flogo_github_icon_143196.png&f=1&nofb=1' 
          type='image' alt="logo"></img>

          <h1 style={{display:"inline", fontFamily:"TaglineFont"}}>GitAll</h1>

          </a>

          <a href="/">
          <BiHomeHeart style={{float:"right", color:"white", margin:"20px", fontSize:"24px"}}/>
          </a>

          <a style={{color:"white", float:"right", display:"inline", marginTop:"20px", 
          marginLeft:"20px", fontSize:"24px"}} 
          href="https://github.com/Aarushi5g" rel="noreferrer" target="_blank"><AiFillGithub/></a>

          <a className="content-to-hide" rel="noreferrer" href="https://github.com/Aarushi5g/GitAll-WebApp" 
          target="_blank" style={{opacity:"0.9", textDecoration:"none",
          border:"2px solid #00CFE4", background:"#010409", color:"white", float:"right", 
          borderRadius:"10px 10px 10px 10px", marginTop:"13px", marginRight:"5px", 
          fontSize:"14px", padding:"7px"}}><BsStarFill style={{marginRight:"8px", 
          color:"#00CFE4", opacity:"1"}}/>Fork on Github</a>

      </header>
    </div>
  )
}

export default Header

/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/