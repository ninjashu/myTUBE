import { Button } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import './Main.css'
const Videos = ({ video }) => {
const url = `https://www.youtube.com/channel/${video.snippet.channelId}`
  return (
    <>
        <div className="video-box1">
            <div className="videos">
              <ReactPlayer
              
                url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                
                width="100%"
                height="100%"
                
                controls
              />
            </div>

            <div className="details">
              <Button target="_blank" href={url}>{video.snippet.channelTitle}</Button>
              {/* <p>{video.snippet.channelTitle}</p> */}
              <p>{video.snippet.description}</p>
              
            </div>
          </div>
    </>
  )
}

export default Videos