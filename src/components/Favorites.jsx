import store from '../store/cites'
import {observer} from 'mobx-react'

const Favorites = () => {

    console.log(store.cities);

    return (
        <div>
            ghds
        </div>
    )
}

export default observer(Favorites)
