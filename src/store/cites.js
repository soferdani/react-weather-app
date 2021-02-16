import { action,makeObservable,observable } from "mobx";


class CitiesStoreImpl {
    cities = []

    constructor() {
        makeObservable(this, {
            cities: observable,
            addNewCity: action
        })
    }

    addNewCity(cityCode) {
        this.cities.push(cityCode)
    }

}

export default CitiesStoreImpl