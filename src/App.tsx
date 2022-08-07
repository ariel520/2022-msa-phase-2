import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './comps/NavBar'
import Musicapp from './comps/Musicapp';
import MusicList from './comps/MusicList';
import Starticon from './comps/Starticon';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Musicapp></Musicapp>
      <Starticon></Starticon>
      <MusicList></MusicList>
    </div>
  );
}

export default App;
