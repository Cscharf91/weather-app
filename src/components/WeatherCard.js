import React from 'react';

const WeatherCard = (props) => {
    return (
        <div className="weather-card">
            <h1>{props.city}</h1>
            <div className="weather-info">
                <p className="weather-description">{props.description} <img alt={props.description} src={props.imageURL} /></p>
                <p className="temp">{props.temp} °{props.degrees.charAt(0)}</p>
            </div>
        </div>
    );
}

export default WeatherCard;