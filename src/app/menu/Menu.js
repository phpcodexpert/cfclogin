import React from 'react';
import { withRouter, Link, } from 'react-router-dom';
import { Routes, } from '../Routes';
import { List, ListItem } from 'material-ui/List';

const MenuElement = (props) => {
  console.log('props', props);
  return (
    <List>
      <ListItem onClick={() => props.history.push(Routes.Dashboard)}>
        Dashboard
      </ListItem>
      <ListItem onClick={() => props.history.push(Routes.Audience)}>
        Audience
      </ListItem>
      <ListItem onClick={() => props.history.push(Routes.Automation)}>
        Automation
      </ListItem>
      <ListItem onClick={() => props.history.push(Routes.Broadcast)}>
        Broadcast
      </ListItem>
      <ListItem onClick={() => props.history.push(Routes.Integrations)}>
        Integrations
      </ListItem>
	        <ListItem onClick={() => props.history.push(Routes.Login)}>
        Login
      </ListItem>
    </List>
  );
};

const Menu = withRouter(({ history }) => (<MenuElement history={history} />));

export {
  Menu,
};
