import React from 'react';

import Getusers from './Components/Getusers/Getusers';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<Router className="App">
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/Getusers">
					<Getusers />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
