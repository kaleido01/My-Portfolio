import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import Framework from './Framework';
import Profile from './Profile';
import TopPage from './TopPage';
import Skill from './Skill';
import history from '../history'
import Connect from './Connect';
const App = () => {
	return (
		<div>
			<Router history={history}>
				<Header />
        <div className="container">
        <Route path="/My-Portfolio" exact component={TopPage} />
        <Route path="/My-Portfolio/profile" exact component={Profile} />
        <Route path="/My-Portfolio/skill" exact component={Skill} />
        <Route path="/My-Portfolio/Framework" exact component={Framework} />
				</div>
        <Connect />
			</Router>
		</div>
	);
};

export default App;
