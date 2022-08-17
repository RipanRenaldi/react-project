import './App.css';
import React, {useState,useEffect}from "react"

function App() {

  const [temperatureInCelcius,setTemperature] = useState(16);
  useEffect(()=>{
    const circle = document.querySelector(".circle");
    console.log(circle)
    if(temperatureInCelcius > 18){
      circle.setAttribute("id","hot")
    }else{
      circle.setAttribute("id","cold")
    }
  },[temperatureInCelcius])
  
  return (
    <div className={"frame"}>
      <div className={"circle"}><h1>{temperatureInCelcius}<sup>.</sup>C</h1></div>
    <div className={"media-button"}>
      <button onClick={()=>{
        setTemperature(temperatureInCelcius - 1)
      }}>-</button>
    </div>
    <div className={"media-button kanan"}>
      <button onClick={()=>{
        setTemperature(temperatureInCelcius + 1)
      }}>+</button>
    </div>
    <div className={"clear"}></div>

    </div>
  );
}

export default App;
