import React from "react";

export default function WeatherDisplay(props){
    const {temperature,conditions} = props.weatherData;
    const style = {
        color: temperature >= 20 ? 'red' : 'blue', 
        height: '100px', 
        width: '60px', 
        display: 'inline'
    };
    return (
        <span style={style}>
        <p>Temperature: {temperature}
           
        </p>
<p>
Conditions: {conditions}
</p>
       
        
       
    </span>
    )
}
