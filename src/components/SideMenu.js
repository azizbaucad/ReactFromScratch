import { withStyles } from "@material-ui/core";
import React from "react";

//Integration du CSS
// with Styles & makeStyles
// Rename styles to useStyles
// Work with withStyles
const style = {

    sideMenu: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: 0,
        width: 320,
        height: "100%",
        backgroundColor: "#ff9e22",
        
    },
}

const SideMenu = (props) => {
    // const classes = useStyles();
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>

        </div>
    );
}
export default withStyles(style)(SideMenu);