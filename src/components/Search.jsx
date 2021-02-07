import { useEffect, useState } from "react";
import axios from 'axios'
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API


export default function Search() {
    const [cityFromUser, setCityFromUser] = useState('')
    const [citesFromAPI, setCitesFromAPI] = useState(null)

    useEffect(() => {
        const cityKey = async function () {
            let LocationAPI = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_API_KEY}&q=${cityFromUser}`)
            LocationAPI = await LocationAPI.data
            setCitesFromAPI(LocationAPI)
        }
        cityKey()
    }, [cityFromUser]) 


    const bringWether = async function () {
        let code = citesFromAPI.filter(city => city.LocalizedName === cityFromUser)
        code = code[0].Key
    }

    return (
    <div className="search">
            <input
                onChange={(event)=> setCityFromUser(event.target.value) } 
                value={cityFromUser}
                placeholder='City Name'
                list='cities'>
            </input>
            <datalist
                id='cities'>
                {citesFromAPI && citesFromAPI.map(city => 
                    <option key={city.Key} value={city.LocalizedName}>{city.Key}</option>)}
            </datalist>
            <button onClick={bringWether} >Select</button>
    </div>
    );
}



