import { useEffect, useState } from "react";
import axios from 'axios'
import OneOption from "./OneOption";
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API


export default function Search() {
    const [cityFromUser, setCityFromUser] = useState('')
    const [citesFromAPI, setCitesFromAPI] = useState(null)
    const [cityCode, setCityCode] = useState ("")

    useEffect(() => { // at the moment does not really working like it should
        const cityKey = async function () {
            let LocationAPI = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_API_KEY}&q=${cityFromUser}`)
            LocationAPI = await LocationAPI.data
            setCitesFromAPI(LocationAPI)
        }
        cityKey()
    }, [cityFromUser]) 


    // const setCityIdFromUser = function (id) {
    //     setCityCode(id)
    // }


    const bringWether = function () {
        console.log(cityCode);

        // setCityFromUser('')
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
                    <OneOption setcode={setCityCode} key={city.Key} value={city.LocalizedName}>{city.Key}</OneOption>)}
            </datalist>
            <button onClick={bringWether} >Select</button>
    </div>
    );
}



