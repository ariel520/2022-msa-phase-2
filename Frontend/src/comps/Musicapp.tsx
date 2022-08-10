import React, { useState } from "react";
import NavBar from "./NavBar";
import { TextField,textFieldClasses,Button} from "@mui/material";
import musicapi from '../musicAPI/musicapi'
import MusicList from '../comps/MusicList';
import Starticon from '../comps/Starticon';
import gettrack from "../musicAPI/gettrack";

const Musicapp = (props:any) => {
    const [input,setInput] = React.useState("");
    const [musicList,setMusicList] = React.useState([]);
    const [current,setCurrent]=React.useState(null) as any;


    const handleinput = (e:any)=>{
        setInput(e.target.value)
    }


    const onsearch = async()=>{
        const res = await musicapi(input)
        setMusicList(res.tracks.items)
    }

    const onplay = async(id:any)=>{
        if(current){
            current.audio.pause()
        }
        
        const res = await gettrack(id)
        var tracks = res.tracks[0]
        tracks.audio = new Audio(tracks.preview_url)
        tracks.audio.play()
        setCurrent(res.tracks[0])
        

    }


    return(
    <div>
        <div  style={{marginLeft:"120px",marginTop:"30px"}}>
           
        <TextField 
            onChange={handleinput}
            id="search-music"
            label="Song...." 
            margin="normal" 
            size="small"/>
        <Button 
            onClick={onsearch}
            variant="contained" color='inherit'
            style={{marginLeft:"7px",marginTop:'17px',color:'#656565'}}>
            search
        </Button>
        </div>
        {current? <Starticon Track={current} ></Starticon>:<></>}
       
        <MusicList List={musicList} OnPlay={onplay}></MusicList> 
        </div>
    )
}

export default Musicapp