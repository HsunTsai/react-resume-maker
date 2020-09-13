import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
/* You can cache page when page cahnge by import CacheRoute & CacheSwitch */
// import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Loadable from 'react-loadable';
import { hot } from 'react-hot-loader/root';

import services from './config/services';
import Header from './common/components/header/Header';
import RouterLoading from './common/components/loading/Loading';

const pages = [
	{
		path: '/home',
		name: 'Home',
		component: Loadable({ loader: () => import('./pages/home/Home'), loading: RouterLoading }),
	},
];

const App = () => {
	return (
		<Router basename={services.getContextRoot}>
			<div className="app">
				<Header pages={pages} />
				<Switch>
					{pages.map((page, index) => (
						<Route key={index.toString()} exact path={page.path} component={page.component} />
					))}
					<Redirect to={pages[0].path} />
				</Switch>
			</div>
		</Router>
	);
};

export default hot(App);
