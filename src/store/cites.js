import { makeAutoObservable } from "mobx";


class CitiesStoreImpl {
    cities = []

    constructor() {
        makeAutoObservable(this)
    }

    addNewCity(cityCode) {
        this.cities.push(cityCode)
    }

    removeCity(cityCode) {  
        let itemToRemove = this.cities.indexOf(cityCode)
        this.cities.splice(itemToRemove,1)
    }

}

const store = new CitiesStoreImpl()

export default store;