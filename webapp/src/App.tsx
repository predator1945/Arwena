import React from 'react';
import NowPlayingBar from './now-playing-bar/NowPlayingBar';
import MainView from './main-view/MainView';
import SideBar from './side-bar/SideBar';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <SideBar />
      <MainView />
      <NowPlayingBar />
    </div>
  );
}

export default App;
