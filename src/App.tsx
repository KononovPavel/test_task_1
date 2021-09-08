import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Main from "./components/main/main";

function App() {

  return (
    <div className="App">
        <div className="wrapper">
            <h1 className={'header'}>Test APP</h1>
            {/*<button onClick={()=> Photo.getAllPhoto().then(data=> console.log(data.data))}>получить все фото</button>*/}
            {/*<button onClick={()=> Photo.getOnePhoto(237).then(data=> console.log(data.data))}>получить одно фото</button>*/}
            <Route exact={true} path={'/'} render={()=> <Main/>}/>
            <div className={'footer'}>
                <hr style={{color:'#CCCCCC'}}/>
                &#169; 2021
            </div>
        </div>
    </div>
  );
}

export default App;
