/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/

import React, { useEffect, useState } from "react"
import axios from "axios";

import { GiArcheryTarget } from "react-icons/gi"
import {BiError} from "react-icons/bi"
import {BiTimeFive} from "react-icons/bi"

import "./pages.css"

function Timeline() {
    const [name, setName] = useState('');
    const [avatar_url, setAvatar] = useState('');
    const [login, setLogin] = useState('');
    const [display, setDisplay] = useState([]);

    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetch("https://api.github.com/users/Aarushi5g", 
        {
            headers: {
              authorization: "token PERSONAL_TOKEN"
            }
          }
          )
        .then(res => res.json())
        .then(data => {
            setData(data)
        });
    }, []);

    const setData = ({name, avatar_url, login}) => {
        setName(name);
        setAvatar(avatar_url);
        setLogin(login);
    }

    function formatDate(date) {
        var monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + " " + monthNames[monthIndex] + " " + year;
      }

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    function getEventType(type) {
        let event = ''
    
        switch(type) {
            case 'WatchEvent':
                event = 'starred'
                break
            case 'ForkEvent':
                event = 'forked from'
                break
            case 'PublicEvent':
                event = 'made public'
                break
            case 'CreateEvent':
                event = 'created a repository'
                break
            case 'PullRequestEvent':
                event = 'opened a pull request in'
                break
            case 'PushEvent':
                event = 'pushed a commit'
                break;
            default:
                event = ''
        }
        return event
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`https://api.github.com/users/${userInput}`, 
        {
            headers: {
              authorization: "token PERSONAL_TOKEN"
            }
          }
          )
        .then(res => res.json())
        .then(data => {
            if(data.message){
                setError(data.message)
            }else{
                setData(data);
                setError(null);
            }
        })

        const result1 = await axios(`https://api.github.com/users/${userInput}/received_events`, 
        {
            headers: {
              authorization: "token PERSONAL_TOKEN"
            }
          }
        )
        setDisplay(result1);
        
    }

    const listDisplay = display.length !== 0 ? display.data.map((item2) => 
    <li style={{marginBottom:"10px"}}>
      <div style={{lineHeight:"1.6", color:"white",background:"#0d1117", opacity:"0.9", padding:"12px", 
        borderRadius:"10px"}}><img alt="user_image" src={item2.actor.avatar_url} style={{width:"60px",
        border:"2px solid white", marginRight:"15px", borderRadius:"5px"}}></img>

        <a style={{color:"white", textDecoration:"none", fontWeight:"bold"}} 
        target="_blank">{item2.actor.display_login}</a> {getEventType(item2.type)} <a
        style={{color:"white", textDecoration:"none", fontWeight:"bold"}} 
        target="_blank">{item2.repo.name}</a><div className="content-to-hide" 
        style={{float:"right"}}><BiTimeFive style={{marginRight:"5px", 
        fontSize:"15px"}}/>{formatDate(new Date(item2.created_at))}</div></div></li>) : 
        <li style={{color:"white", textAlign:"center"}}>Ahh why start with mine?<br></br>Enter a valid Github username to get their timeline!😁</li>

  return (
    <>
    <div style={{textAlign:"center"}}>

    <h6 style={{marginRight:"10px", marginLeft:"10px", textAlign:"center", fontFamily:"TaglineFont", color:"white", fontSize:"25px",
  marginBottom:"10px", marginTop:"35px"}}>Wanna see the GitHub timeline of other users?</h6>

    <div style={{marginRight:"10px", marginLeft:"10px", textAlign:"center", fontFamily:"TaglineFont", color:"white", fontSize:"25px",
  marginBottom:"25px", marginTop:"15px"}}>You can see the recent timeline of any user, just by typing their user name!</div>

    <input style={{borderRadius:"20px 20px 20px 20px", paddingTop:"10px", paddingBottom:"10px",
    paddingLeft:"15px", paddingRight:"10px", 
    boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", 
    border:"2px solid white", marginRight:"20px"}} placeholder="Enter Github Username" 
    type="text" value={userInput} onChange={handleSearch}/>
    
    <button className="main-btn" style={{border:"2px solid white", background:"#010409", 
    color:"white", marginRight:"10px", padding:"10px", 
    boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", 
    paddingRight:"15px", borderRadius:"20px 20px 20px 20px"}} 
    type="submit" onClick={handleSubmit}><GiArcheryTarget 
    style={{marginRight:"5px"}}/>Get Timeline</button>

    </div>
    { error ? (<h2 style={{color:"white", margin:"25px"}}><BiError style={{marginRight:"10px"}}/>{error}</h2>) : (
        <div style={{ marginBottom:"80px"}}>

        <div style={{textAlign:"center", marginTop:"30px"}}>    

          <img src={avatar_url} alt={avatar_url} 
          style={{borderRadius:"50%", width:"110px", 
          boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",  
          border:"2px solid white"}}></img>

          <h2 style={{color:"white", marginTop:"10px"}}>{name}</h2>

          <h3 style={{color:"white", marginTop:"5px"}}>@{login}'s Timeline</h3>

          </div>

          <ul style={{marginTop:"30px", marginLeft:"20px", marginRight:"20px", listStyleType:"none"}}>{listDisplay}</ul>
      </div>
    )}
    </>
  )
}

export default Timeline

/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/