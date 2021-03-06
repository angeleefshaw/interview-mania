import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './login.css';

function Login(props) {
	const [ loginUsername, setLoginUsername ] = useState('');
	const [ loginPassword, setLoginPassword ] = useState('');
	const [ authenticated, setAuthenticated ] = useState(props.authentication);

	const [ redirect, setRedirect ] = useState(false);

	useEffect(
		() => {
			console.log(authenticated);
			console.log(redirect);
		},
		[ redirect ]
	);

	const login = (event) => {
		event.preventDefault();
		axios
			.post('/api/login', {
				username: loginUsername,
				password: loginPassword
			})
			.then((response) => {
				if (response.status === 200) {
					props.setAuthentication(true);
					setRedirect(true);
				}
			})
			.catch((error) => {
				alert('Incorrect username or password');
				console.log(error);
			});
	};

	if (redirect) {
		return <Redirect to="/Main" />;
	}

	return (
		<div className="login-card">
			<h1 className="login-header">User Sign In</h1>
			<form className="pure-form pure-form-aligned">
				<fieldset>
					<div className="pure-control-group">
						<label htmlFor="aligned-name">Username</label>
						<input
							type="text"
							id="aligned-name"
							placeholder="Username"
							onChange={(e) => setLoginUsername(e.target.value)}
						/>
					</div>
					<div className="pure-control-group">
						<label htmlFor="aligned-password">Password</label>
						<input
							type="password"
							id="aligned-password"
							placeholder="Password"
							onChange={(e) => setLoginPassword(e.target.value)}
						/>
					</div>
					<Button variant="outline-dark" className="btn" onClick={login}>
						Sign In
					</Button>
					<Link to="/">
						<Button variant="outline-dark" className="fixed-bottom">
							Exit
						</Button>
					</Link>
				</fieldset>
			</form>
		</div>
	);
}

export default Login;
