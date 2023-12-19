import React,{useState,useEffect} from 'react'
import APIKit from "../../spotify"
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
  return (
    <div className='screen-container'>
      {playlists?.map(playlists=>
        <div>{playlists.name}</div>
      )}
    </div>
  )
}
