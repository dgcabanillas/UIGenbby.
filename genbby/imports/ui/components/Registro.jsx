import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class Registro extends Component{
	
	addUser(event) {
		event.preventDefault();
		const nick = ReactDOM.findDOMNode(this.refs.nick).value;
		const password = ReactDOM.findDOMNode(this.refs.password).value;
		const edad = ReactDOM.findDOMNode(this.refs.edad).value;
		const accountInfo = {
			username: nick,
			password: password,
			profile:{
				edad: edad
			}
		};
		Accounts.createUser(accountInfo,function(er) {
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				//Redirect
				FlowRouter.go('/welcome');
			}
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.addUser.bind(this)}>
					<h1>Registro</h1>
					<input type="text" placeholder="nick" ref="nick"/>
					<input type="password" placeholder="password" ref="password"/>
					<input type="text" placeholder="edad" ref="edad"/>
					<button type="submit" ref="enviar" value="Enviar">Registrar</button>
					<a href="/">back</a>
				</form>
			</div>
		);	
	}
}