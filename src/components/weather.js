import React from 'react';

const Weather = props => (
         <div className="infoWeath">
            { props.city &&
                <div>
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temperature: {props.temp}&deg;C</p>
                    <p>Max-temperature: {props.temp_max}&deg;C</p>
                    <p>Pressure: {props.pressure}</p>
                </div>
           }
           <p className="eror">{props.error}</p>
           </div>
    );


export default Weather;