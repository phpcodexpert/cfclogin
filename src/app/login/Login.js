import React, { Component}  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { withRouter, Link, } from 'react-router-dom';
import { Routes, } from '../Routes';
import { List, ListItem } from 'material-ui/List';

const LoginEl = (props) => {
  return (
     <section>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Sign In" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
		  <List>
		 
	    <ListItem onClick={() => props.history.push(Routes.Register)}>
          Register
         </ListItem>
    </List>

    </section>
	 
  );
};
const Login = withRouter(({ history }) => (<LoginEl history={history} />));
const style = {
 margin: 15,
};
export {
  Login,
};
