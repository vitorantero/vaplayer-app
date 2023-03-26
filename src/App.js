import * as React from 'react';
import './App.css';
import Filters from './Components/Filters'
import Data from './Components/Data';
import Player from './Components/Player';
import { useState } from 'react';

function App() {
  const [isVideo, setVideo] = useState({
    videoName: Data[0].videoName,
    videoSrc: Data[0].videoSrc,
    description: Data[0].description,
  });

  return (
    <>
      <header className='header__section'>
        <p className='header__text'>StudyFlix</p>
      </header>
      
      <div className='Container'>
        <div className='playerDiv'>
        
          <Player Data={isVideo}/>
          <Filters setVideo={setVideo}/>
          
        </div>
      </div>
      
    </>
  );
}

export default App