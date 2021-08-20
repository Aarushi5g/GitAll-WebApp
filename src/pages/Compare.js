/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/

import React, { useEffect, useState } from "react"
import CompareCard from "../components/CompareCard"

import "./pages.css"

function Resume() {
    const [name, setName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [avatar_url, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [public_repos, setPublic_repos] = useState('');
    const [html_url, setHtml_url] = useState('');
    
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

    const setData = ({name, following, followers, avatar_url, bio, public_repos, 
        html_url}) => {
        setName(name);
        setFollowing(following);
        setFollowers(followers);
        setAvatar(avatar_url);
        setBio(bio);
        setPublic_repos(public_repos);  
        setHtml_url(html_url);
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
    }

  return (
    <>
    <div className="Tagline" style={{textAlign:"center", fontFamily:"TaglineFont", color:"white", 
    fontSize:"25px", marginBottom:"25px", marginTop:"35px"}}>Compare Github Profiles: Let the battle begin!</div>

    <div className="row">
        <div className="column">
            <div className="card">

                <input style={{width:"81%",paddingTop:"10px", paddingBottom:"10px",
                paddingLeft:"15px", paddingRight:"10px", border:"2px solid white"}} 
                placeholder="Enter Github Username" type="text" value={userInput} 
                onChange={handleSearch}/>

                <button style={{fontWeight:"bold", border:"2px solid white", 
                background:"#010409", color:"white",padding:"10px", paddingRight:"10px", 
                letterSpacing:"0.5px"}} type="submit" onClick={handleSubmit}>Submit</button>
                
                { error ? (<h3 style={{margin:"25px"}}>{error}</h3>) : (
                    <div>
                        <img src={avatar_url} alt={avatar_url} style={{width:"100px", 
                        borderRadius:"50%", marginTop:"20px"}}></img>

                        <h2 style={{marginTop:"10px"}}>{name}</h2>

                        <h4 style={{marginTop:"10px", marginRight:"15px", marginLeft:"15px"}}>{bio}</h4>
                        
                        <div style={{backgroundColor:"#8074ac", color:"white", paddingTop:"2px", paddingBottom:"4px",
                        marginTop:"10px"}}>

                        <h2  style={{marginTop:"15px"}}>{followers}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{public_repos}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{following}</h2>
                        
                        <p style={{marginBottom:"10px"}}>Followers&nbsp;&nbsp;&nbsp;&nbsp;Repositories&nbsp;&nbsp;&nbsp;&nbsp;Following</p>
                        
                        </div>

                        <div style={{marginBottom:"10px", padding:"15px"}}>
                        <a style={{textDecoration:"none", color:"#8074ac", fontWeight:"bold"}} rel="noreferrer" target="_blank" href={html_url}>View Profile on Github</a>
                        </div>

                    </div>
                )}
                    </div>
                </div>
            <div className="column">
            <div className="card">
                <CompareCard/>
            </div>
            </div>
            <div className="column">
            <div className="card">
                <CompareCard/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Resume

/*
GitAll React Web Application
Developed by Aarushi Gupta: https://github.com/Aarushi5g
*/