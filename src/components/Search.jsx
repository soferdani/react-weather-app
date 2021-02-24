import { useEffect, useState } from "react";
import axios from 'axios'
import store from '../store/cites'
import {observer} from 'mobx-react'
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API

const Search = () => {
    const [cityFromUser, setCityFromUser] = useState('')
    const [citesFromAPI, setCitesFromAPI] = useState(null)


    useEffect(() => {
        const bringCityKey = async function () {
            let LocationAPI = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_API_KEY}&q=${cityFromUser}`)
            LocationAPI = await LocationAPI.data
            setCitesFromAPI(LocationAPI)
        }
        bringCityKey()
    }, [cityFromUser]) 


    const bringWether = async function () {
        let code = citesFromAPI.filter(city => city.LocalizedName === cityFromUser)
        code = code[0].Key
        let currentWeatherInfo = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${code}?apikey=${WEATHER_API_KEY}`)
        currentWeatherInfo = await currentWeatherInfo.data[0]
        store.addNewCity(currentWeatherInfo)
        console.log("🚀 ~ file: Search.jsx ~ line 28 ~ bringWether ~ currentWeatherInfo", currentWeatherInfo)
        
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


export default observer(Search)
