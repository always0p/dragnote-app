
import React from 'react';
import './output.css';
import Background from './components/Background';
import Foreground from './components/Foreground';
import MyContextProvider from './components/Context';

function App() {
  return (
    <MyContextProvider>
     
      <div className="relative w-full h-screen bg-zinc-800 ">
        <Background/>
        <Foreground/> 
       
        
      </div>
    </MyContextProvider>
  );
}

export default App;
