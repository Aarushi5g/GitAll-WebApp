/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/

import React, { useEffect, useState } from "react"
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import axios from "axios";

import "./pages.css"

import { AiFillGithub } from "react-icons/ai"
import { FiDownloadCloud } from "react-icons/fi"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {RiTwitterLine} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"
import {BiError} from "react-icons/bi"
import {BiCoinStack} from "react-icons/bi"

function Resume() {
    const [name, setName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [avatar_url, setAvatar] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [twitter_username, setTwitter_username] = useState('');
    const [created_at, setCreated_at] = useState('');
    const [updated_at, setUpdated_at] = useState('');
    const [bio, setBio] = useState('');
    const [public_repos, setPublic_repos] = useState('');
    const [html_url, setHtml_url] = useState('');
    const [repos, setRepos] = useState([]);
    

    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');

    const printDocument= () => {
      const input = document.getElementById('divToPrint');
      html2canvas(input, {
        useCORS: true,
        allowTaint: true,
        scrollY: -window.scrollY,
      }).then(canvas => {
        const image = canvas.toDataURL('image/jpeg', 1.0);
        const doc = new jsPDF('p', 'px', 'a4');
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const ratio = 0.55;
    
        const canvasWidth = canvas.width * ratio;
        const canvasHeight = canvas.height * ratio;
    
        const marginX = (pageWidth - canvasWidth) / 2;
        const marginY = (pageHeight - canvasHeight) / 2;
    
        doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
        doc.save("resume_download.pdf");
        });
    };

    useEffect(() => {
        fetch("https://api.github.com/users/aarushi5g",
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

    const setData = ({name, following, followers, avatar_url, login, 
        email, location, twitter_username, created_at, updated_at, bio, public_repos, html_url}) => {
        setName(name);
        setFollowing(following);
        setFollowers(followers);
        setAvatar(avatar_url);
        setLogin(login);
        setEmail(email);
        setLocation(location);
        setTwitter_username(twitter_username);
        setCreated_at(created_at);
        setUpdated_at(updated_at);
        setBio(bio);
        setPublic_repos(public_repos);  
        setHtml_url(html_url);
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

        const result = await axios(`https://api.github.com/users/${userInput}/repos`,
        {
          headers: {
            authorization: "token PERSONAL_TOKEN"
          }
        }
        )
        setRepos(result);
        
    }

    const listRepos = repos.length !== 0 ? repos.data.map((item) => <li>{item.name}</li>) : <li>Enter your Github username to get the repos listed!😄</li>

  return (
    <>
    <div style={{textAlign:"center"}}>

    <div style={{textAlign:"center", fontFamily:"TaglineFont", color:"white", fontSize:"25px",
    marginBottom:"25px", marginTop:"35px"}}>Get a quick personalized github resume</div>

    <input style={{borderRadius:"20px 20px 20px 20px", paddingTop:"10px", paddingBottom:"10px",
    paddingLeft:"15px", paddingRight:"10px", border:"2px solid white", marginRight:"20px", 
    boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}} 
    placeholder="Your Github Username" type="text" value={userInput} onChange={handleSearch}/>

    <button className="main-btn" type="submit" onClick={handleSubmit} style={{fontWeight:"bold", border:"2px solid white", background:"#010409", color:"white", 
    marginRight:"10px", padding:"10px", 
    boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", 
    paddingRight:"20px", letterSpacing:"0.5px", borderRadius:"20px 20px 20px 20px"}}>
    <AiFillGithub style={{marginRight:"10px", fontSize:"16px",
    marginLeft:"4px"}}/>Go for it!</button>

    { error ? (<h2 style={{color:"white", margin:"25px"}}><BiError style={{marginRight:"10px"}}/>{error}</h2>) : (
    
    <div>
        
      <div>

        <button onClick={printDocument} style={{opacity:"0.9", fontWeight:"bold", 
        letterSpacing:"1px", border:"2px solid #00CFE4",background:"#010409", color:"white", 
        padding:"10px", borderRadius:"10px 10px 10px 10px", margin:"19px", display:"inline", 
        fontSize:"14px"}}>
        <FiDownloadCloud style={{marginRight:"7px", fontSize:"18px"}}/>Generate PDF</button>

        <a className="view-profile" href={html_url} rel="noreferrer" target="_blank" style={{opacity:"0.9", fontWeight:"bold", 
        letterSpacing:"1px", textDecoration:"none",border:"2px solid #00CFE4", background:"#010409", 
        color:"white", marginRight:"10px", padding:"12px", borderRadius:"10px 10px 10px 10px", 
        margin:"5px", display:"inline", fontSize:"14px"}}>
        <AiOutlineUser style={{marginRight:"5px", fontSize:"16px"}}/>Visit Profile</a>

        </div>

        <div id="divToPrint" style={{backgroundColor:"white", marginRight:"18%", 
        marginLeft:"18%", marginBottom:"5%", paddingBottom:"20px"}}> 

        <div className="document" style={{backgroundColor:"#8074ac", paddingTop:"30px", 
        paddingBottom:"10px"}}>     
          <img src={avatar_url} alt={avatar_url} style={{width:"120px", border:"4px solid white"}}></img>
          
          <h1 style={{color:"white", marginTop:"10px", marginBottom:"5px"}}>{name}</h1>
          
          <h2 style={{color:"white", marginBottom:"15px"}}>@{login}</h2>
          
          <h3 className="email" style={{color:"white", marginBottom:"5px"}}>{email}</h3>
          
        </div>

          <h3 style={{marginTop:"20px"}}>{bio}</h3>

          <h3 style={{marginTop:"20px"}}>Following: {following} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Followers: {followers}</h3>
         
          <h3 style={{marginTop:"10px"}}><HiOutlineLocationMarker style={{marginRight:"7px"}}/>Location: {location}</h3>
          
          <h3 style={{marginTop:"10px"}}><RiTwitterLine style={{marginRight:"7px"}}/>Twitter: @{twitter_username}</h3>
          
          <h3 style={{marginTop:"20px"}}><BiCoinStack style={{marginRight:"7px"}}/>Public repositories: {public_repos}</h3>
          
          <h3 style={{marginTop:"10px"}}>Repos:</h3>
          
          <ul style={{listStyleType:"none", marginTop:"5px"}}>{listRepos}</ul>
          
          <h3 style={{marginTop:"20px"}}>Profile created at: {formatDate(new Date(created_at))} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Profile updated at: {formatDate(new Date(updated_at))}</h3>
          
        </div>
      </div>
    )}
    </div>
    </>
  )
}

export default Resume

/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/