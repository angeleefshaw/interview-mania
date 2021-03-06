import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './style.css';

function Signup() {
	const [ registerUsername, setRegisterUsername ] = useState('');
	const [ registerPassword, setRegisterPassword ] = useState('');
	const [ redirect, setRedirect ] = useState(false);

	useEffect(
		() => {
			console.log(redirect);
		},
		[ redirect ]
	);

	const register = (event) => {
		event.preventDefault();
		axios
			.post('/api/signup', {
				username: registerUsername,
				password: registerPassword
			})
			.then(function() {
				setRedirect(true);
			})
			.catch(function(err) {
				alert('Username already taken! Try another');
				console.log(err);
			});
	};

	if (redirect) {
		return <Redirect to="/login-page" />;
	}

	return (
		<div className="login-card">
			<h1 className="login-header">Sign up here</h1>
			<form className="pure-form pure-form-aligned">
				<fieldset>
					<div className="pure-control-group">
						<label htmlFor="aligned-name">Username</label>
						<input
							type="text"
							id="aligned-name"
							placeholder="Username"
							onChange={(e) => setRegisterUsername(e.target.value)}
						/>
					</div>
					<div className="pure-control-group">
						<label htmlFor="aligned-password">Password</label>
						<input
							type="password"
							id="aligned-password"
							placeholder="Password"
							onChange={(e) => setRegisterPassword(e.target.value)}
						/>
					</div>
					<button className="btn-primary-outline-2" onClick={register}>
						Let's Go!
					</button>
				</fieldset>
			</form>
			<Link to="/">
				<Button variant="outline-light" className="fixed-bottom">
					Exit
				</Button>
			</Link>
		</div>
	);
}

export default Signup;
