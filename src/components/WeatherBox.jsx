import moment from 'moment'
import { useState } from 'react'

export default function WeatherBox(props) { 

    const [fahrenheitOrCelsius, setFahrenheitOrCelsius] = useState(true)

    let location = props.locationCode
    let weather = props.weatherInfo[0]
    let currentTime = moment.unix(weather.EpochTime).format('dddd, MMMM Do, YYYY h:mm A')
    // console.log(props.weatherInfo);// props.locationCode.AdministrativeArea.EnglishType //
    console.log(weather.Temperature);

    const handelTempChange = function () {
        setFahrenheitOrCelsius(!fahrenheitOrCelsius)
    }

    return (
        <div className='weatherBox'>
            <h3 className='cityName'>{location.LocalizedName}, {location.AdministrativeArea.EnglishName} {location.AdministrativeArea.EnglishType}, {location.Country.EnglishName} </h3>
            <h3 className='currentTime'>{currentTime}</h3>
            {fahrenheitOrCelsius ?
                <h3 className='celsius'>it is {weather.Temperature.Metric.Value } celsius right now</h3>
                : <h3 className='fahrenheit'> it is {weather.Temperature.Imperial.Value} fahrenheit right now</h3>}
            <button onClick={handelTempChange}>{fahrenheitOrCelsius? "Celsius" : "fahrenheit" }</button>

        </div>
    )
}