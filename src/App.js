import {  useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import MiddlePart from './component/MiddlePart';
import UpperMiddlePart from './component/UpperMiddlePart';
import clouds from "./images/clouds.png";
import clear from "./images/clear.png";
import rain from "./images/rain.png";
import mist from "./images/mist.png";
import drizzle from "./images/drizzle.png"
import haze from "./images/haze.png"

function App() {
  const apikey = "5e4fd506cf52e0012f4b05904c9c3be9";
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 

  let [city,setcity] = useState("asansol");
  let [data,setdata] = useState(null);


  console.log(city);


  useEffect(()=>{
    async function handleOnClick()  {
      const response = await fetch(apiURL + city.trim() + `&appid=${apikey}`);
      if (response.status === 404) {
        console.log("error");
      }
      else {
        const data_temp = await response.json();
        setdata(data_temp);
        console.log(data_temp.main.temp);
      }
    }

    city && handleOnClick();
    return ()=>{
      console.log("Ended");
    }

  // eslint-disable-next-line
  },[city]);

  
  let weathericon = null;
  let desc=null
  if(data){
    if(data.weather[0].main==="Clouds"){
      weathericon = clouds;
    }
    else if(data.weather[0].main==="Clear"){
      weathericon = clear;
    }
    else if(data.weather[0].main==="Rain"){
      weathericon = rain;
    }
    else if(data.weather[0].main==="Drizzle"){
      weathericon = drizzle;
    }
    else if(data.weather[0].main==="Mist"){
      weathericon = mist;
    }
    else if(data.weather[0].main==="Haze"){
      weathericon = haze;
    }

    desc = data.weather[0].description;
    console.log(desc)
  }

  

  return (
    <div className='main-Container'>
      <Header setcity={setcity}/>
      {data && <UpperMiddlePart Weathericon={weathericon} desc={desc} city={city}/>}
      {data && <MiddlePart data={data} city={city}/>}
    </div>
  );
}

export default App;


