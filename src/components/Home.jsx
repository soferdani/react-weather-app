import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
import WeatherBox from "./WeatherBox";
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;

export default function Home() {
    const [currentWeatherAPI, setCurrentWeatherAPI] = useState()
	const [currentLocationInfo, setCurrentLocationInfo] = useState()

    
	useEffect(() => {
		const bringGeoLocation = async function () {
			navigator.geolocation.getCurrentPosition(
				async (success) => {
					let lat = parseFloat(success.coords.latitude).toFixed(2);
					let lon = parseFloat(success.coords.longitude).toFixed(2);
					let currentLocationCode = await axios.get(
						`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${WEATHER_API_KEY}&q=${lat},${lon}`
					);
					let currentWeatherInfo = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${currentLocationCode.data.Key}?apikey=${WEATHER_API_KEY}`)
					setCurrentLocationInfo(currentLocationCode.data)
					setCurrentWeatherAPI(currentWeatherInfo.data)
				},
				(error) => {
					console.log(
						"🚀 ~ file: Search.jsx ~ line 26 ~ navigator.geolocation.getCurrentPosition ~ error",
						error
					);
				}
			);
		};
		bringGeoLocation();
	}, []);


    return (
        <div className='home'>
            <Search />
		{currentWeatherAPI && <WeatherBox locationCode={currentLocationInfo} weatherInfo={currentWeatherAPI}/>}
        </div>
    )
}