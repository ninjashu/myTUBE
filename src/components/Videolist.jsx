import React from 'react'
import Videos from './Videos';
import './Main.css'

const Videolist = ({ items }) => {
    return (
      <>
        <div className="video-container">
          {/* console.log(items); */}
          Videolist
          {items.map((element) => {
              return(
                  <Videos key={element.toString()+"abc"} video ={element}/>
              )
          })}
        </div>
      </>
    );
  };

export default Videolist