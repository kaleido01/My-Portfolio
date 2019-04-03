import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<React.Fragment>

			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

				<Link to="/My-Portfolio"className="navbar-brand">
					Kaleido's Portfolio
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/My-Portfolio" className="nav-link" >
								TopPage 
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/My-Portfolio/profile" className="nav-link" >
								Profile
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/My-Portfolio/Skill" className="nav-link" >
								Skill
							</Link>
						</li>
            <li className="nav-item">
							<Link to="/My-Portfolio/framework" className="nav-link" >
								Framework
							</Link>
						</li>
            <li className="nav-item">
							<Link to="/My-Portfolio/contactform" className="nav-link" >
								ContactForm
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Header;
