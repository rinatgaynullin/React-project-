import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './Components/Router.jsx';


  
  ReactDOM.render(
    <BrowserRouter>
      <MuiThemeProvider>
        <Router></Router>
      </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
  );



  
  
  