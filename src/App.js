import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllUsers from './pages/AllUsers';
import SingleUser from './pages/SingleUser';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/Moveo-test" exact component={AllUsers} />
				<Route path="/Moveo-test/:name" component={SingleUser} />
			</Switch>
		</Router>
	);
};

export default App;
