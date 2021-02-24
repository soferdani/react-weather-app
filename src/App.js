import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Home from "./components/Home";

function App() {

	return (
		<div className='App'>
			<Router>
				<Route path='/' component={Navbar} />
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route exact path='/favorites' component={Favorites} />
				<Route exact path='/home' component={Home} />
			</Router>
		</div>
	);
}

// to do - 
// 	1. make the serach chinge the screen
// 	2. add favorite with use of local storege

export default App;
