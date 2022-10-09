import {
  Checkroom,
  CurrencyBitcoin,
  Movie,
  MusicNote,
  Newspaper,
  SportsCricket,
  SportsEsports,
  SportsFootball,
  Terminal,
} from "@mui/icons-material";
import React from "react";
import "./Main.css";
import VideoDetails from "./VideoDetails";
const Main = ({ api , setdata }) => {
  const arr = new Array(api);
  return (
    <div className="main-container">
      <div className="side-icon">
        <div className="icon">
          <MusicNote onClick={()=>setdata("new music")} /> Music
        </div>
        <div className="icon">
          <SportsEsports onClick={()=>setdata("sports news")}/> Sports
        </div>
        <div className="icon">
          <Newspaper onClick={()=>setdata("latest news")}/> News
        </div>
        <div className="icon">
          <SportsCricket onClick={()=>setdata("cricket latest match")}/> Cricket
        </div>
        <div className="icon">
          <SportsFootball onClick={()=>setdata("football latest match")}/> Football
        </div>
        <div className="icon">
          <Terminal onClick={()=>setdata("coding videos")}/> Coding
        </div>
        <div className="icon">
          <Movie onClick={()=>setdata("movie")}/> Movie
        </div>
        <div className="icon">
          <Checkroom onClick={()=>setdata("fashion news")}/> Fashion
        </div>
        <div className="icon">
          <SportsCricket onClick={()=>setdata("stock market news")}/> Market
        </div>
        <div className="icon">
          <CurrencyBitcoin onClick={()=>setdata("cryptocurrency news")}/> Cryoto
        </div>
      </div>

      <div className="main-box">
        <VideoDetails arr={arr}/>
      </div>
    </div>
  );
};

export default Main;

