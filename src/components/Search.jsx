import { useState } from "react";

export default function Search() {

    const [cityFromUser, setCityFromUser] = useState('')

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
