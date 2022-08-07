import React from "react";
import NavBar from "./NavBar";
import { TextField,textFieldClasses,Button} from "@mui/material";


const Musicapp = (props:any) => {
    return(
        <div  style={{marginLeft:"120px",marginTop:"30px"}}>
        <TextField 
            id="search-music"
            label="Song...." 
            margin="normal" 
            size="small"/>
        <Button 
            variant="contained" color='inherit'
            style={{marginLeft:"7px",marginTop:'17px',color:'#656565'}}>
            search
        </Button>
        </div>
    )
}

export default Musicapp