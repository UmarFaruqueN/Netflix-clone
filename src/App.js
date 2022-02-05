import React from "react";
import {trending,action,originals,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies,Documentaries} from './Constants/constants'
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url= {trending} title = 'Trending' />
    <RowPost url= {action} title = 'Action' />
    <RowPost url= {originals} title = 'NetFlix Orginals' />
    <RowPost url= {ComedyMovies} title = 'Comedy Movies' />
    <RowPost url= {HorrorMovies} title = 'Horror Movies' />
    <RowPost url= {ActionMovies} title = 'Action Movies' />
    <RowPost url= {RomanceMovies} title = 'Romance Movies' />
    <RowPost url= {Documentaries} title = 'Documentaries ' />
    </div>
  );
}

export default App;
