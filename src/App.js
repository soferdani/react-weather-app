import { BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Home from "./components/Home";

function App() {


	return (
		<div className='App'>
			<Router>
				<Route path='/' component={Navbar} />
				<Route exact path='/favorites' component={Favorites} />
				<Route exact path='/home' component={Home} />
			</Router>
		</div>
	);
}

export default App;
