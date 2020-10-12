import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    main: {
		textAlign: "center",
	},
	text: {
		color: "black",
	},
    btn: {
        color: "red",
        borderColor: "red",
        textAlign: "center",
        margin: "2em",
    },
    btnRoot: {
    },
    btnLabel: {
    },
});

const Home = props => {
	const classes = useStyles();

	return (
    	<div className={classes.main}>
      	<Button 
        	variant="outlined"
        	className={classes.btn}
			classes={{root: classes.btnRoot, label: classes.btnLabel}}
			href="/shoppingcart"
     	>
      	Shopping Cart
		</Button>
    	</div>
	);
};
export default Home;