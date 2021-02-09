import moment from 'moment'

export default function WeatherBox(props) { 


    let location = props.locationCode
    let weather = props.weatherInfo[0]
    let currentTime = moment.unix(weather.EpochTime).format('dddd, MMMM Do, YYYY h:mm A')
    // console.log(props.weatherInfo);// props.locationCode.AdministrativeArea.EnglishType //
    console.log(weather);
    return (
        <div className='weatherBox'>
            <h3 className='cityName'>{location.LocalizedName}, {location.AdministrativeArea.EnglishName} {location.AdministrativeArea.EnglishType}, {location.Country.EnglishName} </h3>
            <h3 className='currentTime'>{currentTime}</h3>
            
        </div>
    )
}