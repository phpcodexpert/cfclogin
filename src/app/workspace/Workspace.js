import React from 'react';
import { Route, } from 'react-router-dom';
import { Routes, } from '../Routes';

import { Audience, } from './audience';
import { Automation, CreateSequence, ViewSequence, EditSequence, } from './automation';
import { Broadcast, } from './broadcast';
import { Dashboard, } from './dashboard';
import { Register, } from './register';

import { Integrations, } from './integrations';

const Workspace = (props) => {
  return (
    <main>
      <Route exact path={Routes.Dashboard} component={Dashboard} />
	   
		  <Route exact path={Routes.Register} component={Register} />

	
      <Route exact path={Routes.Audience} component={Audience} />

      <Route exact path={Routes.Automation} component={Automation} />
      <Route exact path={Routes.EditSequence} component={EditSequence} />
      <Route exact path={Routes.ViewSequence} component={ViewSequence} />
      <Route exact path={Routes.CreateSequence} component={CreateSequence} />

      <Route exact path={Routes.Broadcast} component={Broadcast} />

      <Route exact path={Routes.Integrations} component={Integrations} />
    </main>
  );
};

export {
  Workspace,
};
