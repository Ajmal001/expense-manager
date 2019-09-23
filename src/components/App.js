import React, { Component } from 'react';
import {Router,Route,Redirect,Switch} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';


import '../assets/styles/Common.css';
import {history} from '../helpers'
import Dashboard from '../components/DashBoard'
import Settings from '../components/Settings'
import Account from '../components/Account'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { theme } from '../theme';
import RouteWithLayout from './RouteWithLayout';
import Main  from '../layouts/Main'
import { CssBaseline } from '@material-ui/core';
import ImportData from './ImportData/ImportData';



class App extends Component {
	render() {
		return(
			<ThemeProvider theme={theme}>
				<CssBaseline></CssBaseline>
				<Router history ={history}>
					<Switch>
						<Route exact path = "/signin"  render={() => <SignIn></SignIn>}></Route>
						<Route exact path = "/signup"  render={() => <SignUp></SignUp>}></Route>
						<RouteWithLayout exact path = "/dashboard"  layout={Main} component={Dashboard}/>
						<RouteWithLayout exact path = "/settings"  layout={Main} component={Settings}/>
						<RouteWithLayout exact path = "/account"  layout={Main} component={Account}/>
						<RouteWithLayout exact path = "/importdata"  layout={Main} component={ImportData}/>
						<Redirect exact from = "/"  to="/dashboard"/>
					</Switch>
				</Router>
			</ThemeProvider>
		);
	}

}

export default App;
