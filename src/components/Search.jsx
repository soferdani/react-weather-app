import { useEffect, useState } from "react";
import axios from 'axios'
const WEATHER_API_KEY= process.env.REACT_APP_WEATHER_API


export default function Search() {
    const [cityFromUser, setCityFromUser] = useState('')


    useEffect(() => {
        const cityKey = async function () {
            let data = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_API_KEY}&q=${cityFromUser}`)
            data = await data.data
            console.log(data);
        }
        cityKey()

    },[cityFromUser])

    const handelCityChange = function (event) {
        setCityFromUser(event.target.value)
    }

    const handelCitySearch = function () {
        console.log(cityFromUser);
        setCityFromUser('')
    }

    return (
    <div className="search">
            <input onChange={handelCityChange} value={cityFromUser} placeholder='City Name'></input>
            <button onClick={handelCitySearch} >Search</button>
    </div>
    );
}
