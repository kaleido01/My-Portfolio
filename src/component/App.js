import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import Framework from './Framework';
import Profile from './Profile';
import TopPage from './TopPage';
import history from '../history'
const App = () => {
	return (
		<div>
			<Router history={history}>
				<Header />
        <div className="container">
        <Route path="/" exact component={TopPage} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/Framework" exact component={Framework} />
				</div>
			</Router>
		</div>
	);
};

export default App;
