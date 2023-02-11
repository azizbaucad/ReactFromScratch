import { makeStyles } from "@material-ui/core";
import React from "react";

//Integration du CSS
// with Styles & makeStyles
// Rename styles to useStyles
const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: 320,
    height: "100%",
    backgroundColor: "#253053",
  },
});

export default function SideMenu() {
  const classes = useStyles(); //Appel de la fonction styles
  // className = {classes.sideMenu} permet d'appliquer le CSS
  return <div className={classes.sideMenu}> </div>;
}
