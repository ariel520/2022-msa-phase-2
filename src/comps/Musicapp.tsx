import React, { useState } from "react";
import NavBar from "./NavBar";
import { TextField,textFieldClasses,Button} from "@mui/material";
import musicapi from '../musicAPI/musicapi'
import MusicList from '../comps/MusicList';
import Starticon from '../comps/Starticon';

const Musicapp = (props:any) => {
    const [input,setInput] = React.useState("");
    const [musicList,setMusicList] = React.useState([]);

    const handleinput = (e:any)=>{
        setInput(e.target.value)
    }


    const onsearch = async()=>{
        const res = await musicapi(input)
        setMusicList(res.tracks.items)
        console.log(res)
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
        <Starticon></Starticon>
        <MusicList List={musicList}></MusicList>
        </div>
    )
}

export default Musicapp