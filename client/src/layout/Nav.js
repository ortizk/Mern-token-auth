import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Nav extends Component {
	handleLogout = (e) => {
		console.log("logging out...");
		e.preventDefault();
		localStorage.removeItem('mernToken');
		this.props.updateUser();
	}

	render() {
		let links = '';
		if(this.props.user){
			links = (
				<span>
					<a onClick={this.handleLogout}>Logout</a>
					<Link to="/profile">Profile</Link>
				</span>
			);
		}
		else {
			links = (
				<span>
					<Link to="/login">Log in</Link>
					<Link to="/signup">Sign Up</Link>
				</span>
			);
		}		

		return(
			<div>
				<nav className="nav">
					<Link to="/">Home</Link>
					{links}
				</nav>
				<header className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1 className="App-title">Welcome to React</h1>
		        </header>
			</div>
		);
	}
}

export default Nav;