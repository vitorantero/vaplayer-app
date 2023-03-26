import React, { useState } from 'react';
import './Filters.css'
import Data from './Data';


function VideoSidebar({ setVideo }) {
  const [filters, setFilters] = useState({ tag: 'Todas' });

  const handleFilterChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = (videos, filters) => {
    if (filters.tag !== 'Todas') {
      videos = videos.filter((video) => video.tag === filters.tag);
    }
    return videos;
  };

  const filteredVideos = applyFilters(Data, filters);

  return (
    <aside className="galeryContainer">
      
      <button type="button" className="buttonsgalery" name='tag' value='Todas'  onClick={handleFilterChange}>
        Todos
      </button>
      <button type="button" className="buttonsgalery" name='tag' value='Direcao' onClick={handleFilterChange}>
      Direção
      </button>
      <button type="button" className="buttonsgalery" name='tag' value='alura' onClick={handleFilterChange}>
        Alura
      </button>
      <button type="button" className="buttonsgalery" name='tag' value='rocketseat' onClick={handleFilterChange}>
        Rocketseat
      </button>
      <button type="button" className="buttonsgalery" name='tag' value='dio' onClick={handleFilterChange}>
        DIO
      </button>
      <ul className='List'>
        {filteredVideos.map((data) => (
          <li className="ListItem"
            key={data.id}
            onClick={() =>
              setVideo({
                videoName: data.videoName,
                videoSrc: data.videoSrc,
                description: data.description,
              })
            }
          >
            <img className="Cover" src={data.imgSrc} alt={data.videoName} />
            <h3 className="VideoTitle" src={data.videoName}/>
          </li>
        ))}
      </ul>
    </aside>
  );
}


export default VideoSidebar;