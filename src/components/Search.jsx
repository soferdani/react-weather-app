import { useEffect, useState } from "react";
import axios from 'axios'
const WEATHER_API_KEY= process.env.REACT_APP_WEATHER_API


export default function Search() {
    const [cityFromUser, setCityFromUser] = useState('')
    const [citesFromAPI, setCitesFromAPI] = useState(null)
    const [currentGeoLocation, setCurrentGeoLocation] = useState(null)

    useEffect(() => { // at the moment does not really working like it should
        const cityKey = async function () {
            let LocationAPI = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_API_KEY}&q=${cityFromUser}`)
            LocationAPI = await LocationAPI.data
            setCitesFromAPI(LocationAPI)
        }
        cityKey()
    }, [cityFromUser]) 


    useEffect(() => { // good format for the api req of the geolocation is 
        ///http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q=32.1,34.8&apikey=ip1VDGLRf1bg4vLPoUeea9yP7gJPQ6BX&toplevel=false

        
        navigator.geolocation.getCurrentPosition(console.log, console.log) 
    },[])

    const handelCityChange = function (event) {
            setCityFromUser(event.target.value)
    }

    const handelCitySearch = function () {
        setCityFromUser('')
    }


    return (
    <div className="search">
            <input onChange={handelCityChange} value={cityFromUser} placeholder='City Name'></input>
            <select name='cites'>
                {citesFromAPI ? citesFromAPI.map(city => 
                    <option key={city.Key} value={city.Key}>{city.LocalizedName}</option>
                ): <option value='null'>Loading</option>}
            </select>
            <button onClick={handelCitySearch} >Search</button>

            
    </div>
    );
}

