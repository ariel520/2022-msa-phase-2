import axios from "axios";

const playmusic = async(musicSong:string)=>{
   const url =`https://spotify23.p.rapidapi.com/search/?q=${musicSong}&type=tracks`;
   const headers = {
    'X-RapidAPI-Key': 'fe0197257fmsh15b79483cb5cf69p12e58ejsnaa0848aa0e5f',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'

   }
   const response = await axios.get(url,{headers});
   return response.data
}

export default playmusic