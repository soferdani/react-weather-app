import {Link} from 'react-router-dom'


export default function Navbar() { 
    return (
        <div className='nav-bar'>
            <Link to='/home'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    )
}