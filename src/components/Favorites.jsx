import store from '../store/cites'
import {observer} from 'mobx-react'

const Favorites = ()=> {

    console.log(store);

    return (
        <div>
            this is favorites
        </div>
    )
}

export default observer(Favorites)
