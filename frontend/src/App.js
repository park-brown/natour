import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
function App() {
	return (
		<Router>
			<AppHeader />
			<Switch>
				<Route path='/signup'></Route>
				<Route path='/login'></Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
