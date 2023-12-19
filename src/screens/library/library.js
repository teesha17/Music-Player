import React,{useState,useEffect} from 'react';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from "react-icons/ai";
import APIKit from "../../spotify";
import "./library.css";
import { useNavigate } from 'react-router-dom';

export default function  Library() {

  
  const[playlists,setPlaylists]=useState(null);

  useEffect(() => {
    console.log("Before API request");
    APIKit.get("me/playlists")
      .then((response) => {
        setPlaylists(response.data.items);
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      })
      .finally(() => {
        console.log("After API request");
      });
  }, []);
  const navigate=useNavigate();
const playPlaylist=(id)=>{
  navigate("/player",{state:{id:id}})
}

  return (
    <div className='screen-container'>
    <div className='library-body'>
      {playlists?.map(playlists=>
        <div className='playlist-card' key={playlists.id} onClick={()=>playPlaylist(playlists.id)}>
        <img src={playlists.images[0].url} className='playlist-image' alt="playlistart"/>
        <p className='playlist-title'>{playlists.name}</p>
        <p className='playlist-subtitle'>{playlists.tracks.total} Songs</p>
        <div className='playlist-fade'>
          <IconContext.Provider value={{size:"50px",color:"#E93D72"}}>
            <AiFillPlayCircle/>
          </IconContext.Provider>
        </div>
        </div>
      )}
    </div>
    </div>
  )
}
