import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {
	return (
		<Router>
			<AppHeader />
			<Switch>
				<Route path='/signup'>
					<SignUp />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
