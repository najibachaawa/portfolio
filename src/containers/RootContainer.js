import React from 'react';
import { Switch, Route, RouteComponentProps, matchPath, match } from 'react-router-dom';
import WithLayoutRouter from '../component/layout/WithLayoutRoute';

//Containers
import HomeContainer from './HomeContainer';
import WorkContainer from './WorkContainer';
import ContactContainer from './ContactContainer';
import LoginConttainer from './dashboard/LoginContainer';
import NotFound from '../component/layout/404';

const RootContainer = () => {
	return (
		<Switch>
			<WithLayoutRouter path={'/'} exact component={HomeContainer} />
			<Route path={'/admin'} exact component={LoginConttainer} />
			<WithLayoutRouter path={'/work'} component={WorkContainer} />
			<WithLayoutRouter path={'/contact'} component={ContactContainer} />
			<Route path="*" component={NotFound} />
		</Switch>
	);
};
export default RootContainer;
