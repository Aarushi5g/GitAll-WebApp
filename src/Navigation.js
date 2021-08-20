/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/

import React from "react"
import { Route, Switch } from "react-router-dom"
import Resume from "./pages/Resume"
import Timeline from "./pages/Timeline"
import Compare from "./pages/Compare"

import "./Component.css"
import Footer from "./Footer"

class AppContainer extends React.Component {
  render() {

    const links = [
        {
          id: 1,
          path: "/resume",
          text: "Quick Resume",
        },
        {
            id: 2,
            path: "/timeline",
            text: "User Timeline",
        },
        {
            id: 3,
            path: "/compare",
            text: "Compare Profiles",
        },
    ]

    return (
        <>
        <Switch>
          <Route exact path="/">
            <div className="navigation">
              <div style={{textAlign:"center", color:"white"}}>
                <h1 className="tagline">Get All from GitAll.<br></br><div 
                style={{fontSize:"20px"}}>For the best experience and a swimming octocat🤩, kindly use a desktop!</div></h1>
              </div>
              <nav className="nav">
                <ul style={{textAlign: "center"}} className="navList">
                  {links.map(link => {
                    return (
                      <a className="column-boot1" style={{textDecoration: "none", 
                      fontWeight:"bold", padding:"40px", color:"white"}} href={link.path}>
                      <li style={{display: "inline", justifyContent: "center", 
                      backgroundColor:"#010409", marginLeft:"15px", marginRight:"15px", 
                      paddingLeft:"50px", paddingRight:"50px", paddingTop:"20px", 
                      borderRadius:"15px 15px 15px 15px", paddingBottom:"20px", 
                      border:"2px solid #00CFE4", opacity:"0.85"}} 
                      className="navBtn column-boot" key={link.id}>{link.text}</li>
                      </a>
                    )
                  })}
                </ul>
              </nav>
            </div>
            <div className="ocean">
              <div className="bubble bubble--1"></div>
              <div className="bubble bubble--2"></div>
              <div className="bubble bubble--3"></div>
              <div className="bubble bubble--4"></div>
              <div className="bubble bubble--5"></div>
              <div className="bubble bubble--6"></div>
              <div className="bubble bubble--7"></div>
              <div className="bubble bubble--8"></div>
              <div className="bubble bubble--9"></div>
              <div className="bubble bubble--10"></div>
              <div className="bubble bubble--11"></div>
              <div className="bubble bubble--12"></div>
              <div id="octocat"></div>
            </div>
          </Route>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/compare" component={Compare} />
        </Switch>
        <Footer/>
        </>
      )
  }
}
export default AppContainer

/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/