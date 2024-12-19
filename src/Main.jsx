import React, { useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import cloudSky from './image/clearClouds.png.png';
import { FaEye } from "react-icons/fa6";
import windflow from './image/windFlow.png.png';
import humidityImage from './image/humidity.png.png'
import pressureImage from './image/pressure.png'



const Main = ({ datas }) => {


  return (
    <section className="head-section-main">
      {datas && (
        <section className="content-section-main">
          <section className="section1-main">
            <figure>
              <img src={cloudSky} className="cloudpng-main" />
            </figure>
            
            <h2 className="h2-main">
              {datas.name}
              <span className="span-main"> {`, ${datas.sys.country}`}</span>
            </h2>
            <p>
              {Math.round(datas.main.temp)}
              <TbTemperatureCelsius />
            </p>
            <p>
              Description: <br />
              <span className="span-main"> {datas.weather[0].description}</span>
            </p>
          </section>
          <section className="section-main">
            <div className="div1-main">
              <h3>Latitude : </h3>
              <p className="para-main">{Math.round(datas.coord.lat)} Lat</p>
            </div>
            <div className="div2-main">
              <h3>Longitude : </h3>
              <p className="para-main">{Math.round(datas.coord.lon)}  Lgt</p>
            </div>
            <div className="div3-main">
              <h3>visibility:</h3>
              <p className="para-main">{datas.visibility}<FaEye /></p>
            </div>
          </section>
          <section className="section3-main">
            <div className="div4-main">
              <h3>wind speed :</h3>
              
              <p className="para-main">{datas.wind.speed} km/h <img src={windflow} alt="" height="30px" width="30px" /></p>
            </div>
            <div className="div5-humidity">
              <h3>Humidity :</h3>
              <p className="para-main">{datas.main.humidity} % <img src={humidityImage } alt="" height="30px" width="30px" /></p>
            </div>
            <div className="div6-pressure">
              <h3>pressure :</h3>
              <p className="para-main">{datas.main.pressure} hPa<img src={pressureImage} alt="" height="50px" width="50px" /></p>
            </div>
          </section>

          {/* 
              <p>{datas.coord.lon}</p>
              <p>{datas.main.humidity}</p>
              <p>{datas.main.pressure}</p>
              
              */}
        </section>
      )}
    </section>
  );
};

export default Main;
