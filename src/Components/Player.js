import Data from "./Data"
import './Player.css'

function Player({ Data }) {
    return(
        <div>
            <video className="Video" src={Data.videoSrc} controls="controls"/>
            <h1 className="title">{Data.videoName}</h1>
            <p className="description-video">{Data.description}</p>
        </div>
        
    )
}

export default Player