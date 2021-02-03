import { useEffect, useState } from "react";
import axios from 'axios'
const WEATHER_API_KEY= process.env.REACT_APP_WEATHER_API


export default function Search() {
    const [cityFromUser, setCityFromUser] = useState('')
    const [citesFromAPI, setCitesFromAPI] = useState(null)
    const [cityCode, setCityCode] = useState (null)

    useEffect(() => { // at the moment does not really working like it should
        const cityKey = async function () {
            let LocationAPI = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_API_KEY}&q=${cityFromUser}`)
            LocationAPI = await LocationAPI.data
            setCitesFromAPI(LocationAPI)
        }
        cityKey()
    }, [cityFromUser]) 


    const bringWether = async function () {
        console.log(cityCode);
        setCityFromUser('')
    }

    return (
    <div className="search">
            <input
                onChange={(event) => setCityFromUser(event.target.value)} 
                value={cityFromUser}
                placeholder='City Name'>
            </input>
            <select
                onChange={(event)=> setCityCode(event.target.value)}>
                {citesFromAPI ? citesFromAPI.map(city => 
                    <option key={city.Key} value={city.Key}>{city.LocalizedName}</option>
                ): <option value='null'>Loading</option>}
            </select>
            <button onClick={bringWether} >Select</button>
            
    </div>
    );
}

