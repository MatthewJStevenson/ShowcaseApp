import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    main: {
        textAlign: "center",
        marginTop: "8em",
        height: "6em",
    },
    text: {
        fontWeight: "300",
        fontSize: "15px"
    }
});

const Footer = props => {
  const classes = useStyles();

    return (
        <div className={classes.main}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={classes.text}>Matthew Stevenson &#169;</Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default Footer;