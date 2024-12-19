import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import Main from "./Main";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

import rainClouds from './image/rainyCLoud.png';
import thunderClouds from './image/thunderClouds.png';
import snowClouds from './image/snowCloud.png';
import scatteredClouds from './image/scatteredClouds.png';

const App = () => {
  const API = "9c9315842d5a17331785528f6629a345";

  const [city, setCity] = useState("goa");
  const [datas, setDatas] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const count = useRef(0);
  const inputRef = useRef()
  const [cityNotFound , setCityNotFound] = useState(false)
  // const [emptyContent , setEmptyContent] = useState(true)

  // const [icons, setIcons] =useState(snowClouds)

  // const handleImages = {
  //   "01d" : cloudSky ,
  //   "01n" : cloudSky,
  //   "02d" : cloudSky,
  //   "02n" : cloudSky,
  //   "03d" : scatteredClouds,
  //   "03n" : scatteredClouds,
  //   "04d": thunderClouds,
  //   "04n": thunderClouds,
  //   "09d" : rainClouds,
  //   "09n" : rainClouds,
  //   "10d" : rainClouds,
  //   "10n" : rainClouds,
  //   "11d" : thunderClouds,
  //   "11n" : thunderClouds,
  //   "13d" : snowClouds,
  //   "13n" : snowClouds,
  // }
  
  const fetchingWheather = async () => {
    try {
      setIsLoading(true);
      const fetching = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=Metric`);
        const response = fetching.data;
        setDatas(response);
        // const weatherCode = datas.weather[0].icon
        // console.log(weatherCode)        

    } catch (err) {
      alert("you entered a uncorrect city name");
      setIsLoading(false)
    } finally {
      setIsLoading(false);
      
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity("");
  };

  useEffect(() => {
    fetchingWheather();
    
  }, []);

  return (
    <section>
      <Header/>
      <Search
        fetchingWheather={fetchingWheather}
        city={city}
        setCity={setCity}
        datas={datas}
        handleSubmit={handleSubmit}
        inputRef = {inputRef}
      />
      {isLoading && (
       <div className="div-para-loading">
        <p className="para-loading">your content is loading . please wait</p>
       </div> 
      )}
      {!isLoading && <Main datas={datas} />}
      <Footer/>
    </section>
  );
};

export default App;
