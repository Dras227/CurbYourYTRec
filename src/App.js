import './App.css';
import { useState } from "react";

const ytrec = {
  "Inspire you coding":["Deepmind AlphaGo Documentary","How google Search Works Documentary","Mark Rober Mario Effect","How working in a 15min can change life","Stuff Made Here PoolTable virtual making"],
  "Make you feel good":["How to be Adulting","Oxford talk of Wentworth","Some Random Captain cold video"],
  "Make you question life":["Why world is maya?","Life of Nikola Tesla documentary movie","How to live average and be happy"]
}



var keysss = Object.keys(ytrec)
function App() {
const [userGenre,setUserGenre] = useState("Inspire you coding")
function  genreClickHandler(genre) {
  setUserGenre(genre);
  
}
  return (
    <div className="App">
      <h1>📺 CurbYourYTRec</h1>
      <h4>YouTube recommondation according to your need of Mood</h4>
      
      {
        keysss.map(genre => {
          return <span 
          onClick = {()=>genreClickHandler(genre)}
          class="genre">{genre}</span>
        })
      }
      <h6 class="show-genre">{userGenre}</h6>
      <ul>
      {
        ytrec[userGenre].map((item) =>{
          return <li class="list-of-videos">{item}</li>
        })
      }
      </ul>
       
    </div>
  );
}

export default App;
