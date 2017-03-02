import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class Login extends Component{
	enterSystem(e) {
		e.preventDefault();
		// Get our input values
		const username = ReactDOM.findDOMNode(this.refs.username).value;
		const password = ReactDOM.findDOMNode(this.refs.password).value;

		// Login user
		Meteor.loginWithPassword(username, password, (er)=>{
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				FlowRouter.go('/welcome');
			}
		});
	}

	render() {
		return (
			<div>
				<form action="" onSubmit={this.enterSystem.bind(this)}>
					<h1>Login</h1>
					<input type="text" placeholder="nick" ref="username"/>
					<input type="password" placeholder="password" ref="password"/>
					<button type="submit" ref="enviar" value="Enviar">Entrar</button>
					<a href="/registro">Registrate</a>
				</form>
			</div>
		);	
	}
}