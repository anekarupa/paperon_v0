import React from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import theme from './Theme'
import FirstPage from './pages/FirstPage';

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FirstPage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}