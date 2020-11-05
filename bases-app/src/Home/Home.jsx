import React from 'react';
import { Navbar, Nav, Icon } from 'rsuite';
import { Switch, Route } from 'react-router-dom'
import './Home.css';
import Consultas from '../Consultas/Consultas';
import Crud from '../Crud/Crud';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		const user = localStorage.getItem('user');

		if(!user) this.props.history.push('/login');
	}
	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<a href="/" className="navbar-brand logo"> CPM </a>
					</Navbar.Header>
					<Navbar.Body>
						<Nav onSelect={this.logout}>
							<Nav.Item eventKey="1" icon={<Icon icon="detail"/>}> Consultas </Nav.Item>
							<Nav.Item eventKey="2" icon={<Icon icon="edit"/>}> CRUD </Nav.Item>
						</Nav>
						<Nav pullRight onSelect={this.logout}>
							<Nav.Item eventKey="3" icon={<Icon icon="sign-out"/>}> Logout </Nav.Item>
						</Nav>
					</Navbar.Body>
				</Navbar>
				<div>
					<Switch>
						<Route exact path='/' component={Consultas}/>
						<Route exact path='/crud' component={Crud}/>
					</Switch>
				</div>
			</div>
		);
	}

	logout = (ek, _) => {
		switch (ek) {
			case '1':
				this.props.history.push('/');
				break;
			case '2':
				this.props.history.push('/crud');
				break;
			case '3':
				localStorage.clear();
				this.props.history.push('/login');
				break;
			default:
				break;
		}
	}
}