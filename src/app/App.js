import React from 'react';
import { Provider, } from 'react-redux';
import { ConnectedRouter, } from 'react-router-redux';
import { BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import { Login, } from './login';
import { Workspace, } from './workspace';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { store, history, } from '../state'

const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <Grid className="container">
            <Row className="row">
              <Col xs={0} sm={0} md={2}>
                <Login />
              </Col>
              <Col xs={12} sm={12} md={10}>
                <Workspace />
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export {
  App,
};

