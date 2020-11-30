import React from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from './Theme'

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>

      </React.Fragment>
    </MuiThemeProvider>
  );
}