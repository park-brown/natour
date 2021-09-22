import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Detail from './pages/Detail/Detail';
import Edit from './pages/Edit/Edit';

function App() {
	return (
		<Router>
			<AppHeader />
			<Switch>
				<Route exact path='/signup'>
					<SignUp />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/edit'>
					<Edit />
				</Route>

				<Route exact path='/:detail'>
					<Detail />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
