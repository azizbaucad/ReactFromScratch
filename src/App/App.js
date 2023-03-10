import React from "react";
import SideMenu from "../components/SideMenu"; ///To fix this error, you will add . before ./components/SideMenu 
import "./App.css";
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";


import Employees from "../pages/Employees/Employees";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
    shape: {
      borderRadius: "12px",
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: "translateZ(0)",
        },
      },
    },
    props: {
      MuiIconButton: {
        disableRipple: true,
      },
    },
  },
});




//coder le app Main
const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});


function App() {
  //appel de la fonction useStyles
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        
        <Employees />
      </div>
      {/* we can add css here */}
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
