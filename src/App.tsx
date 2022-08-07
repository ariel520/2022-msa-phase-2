import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './comps/NavBar'
import Musicapp from './comps/Musicapp';
import MusicList from './comps/MusicList';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Musicapp></Musicapp>
      <MusicList></MusicList>
    </div>
  );
}

export default App;
