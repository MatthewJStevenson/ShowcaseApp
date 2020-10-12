import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    main: {
        textAlign: "center",
    },
    text: {
        verticalAlign: "center",
    }
});

const ShoppingCart = props => {
  const classes = useStyles();
  
  const counter = useSelector(state => state.counter);

  const products = [
    {
        name: "Juice Cannon",
        info: "this is a good weapon",
        image: "https://i.imgur.com/fvO3kvU.png",
    },
    {
        name: "AS VAL",
        info: "this is also a good weapon",
        image: "https://i.imgur.com/sQtGgGE.png",
    },
    {
        name: "HK 416A5",
        info: "this is a good weapon that shoots",
        image: "https://i.imgur.com/aRSn5fv.png",
    },
    {
        name: "AKMN",
        info: "this is a good weapon that bangs",
        image: "https://i.imgur.com/Ko1uKro.png",
    },
    {
        name: "M4A1",
        info: "this is a good weapon that uses 5.56",
        image: "https://i.imgur.com/n903xH9.png",
    },
    {
        name: "M1A",
        info: "this is a good weapon for distance",
        image: "https://i.imgur.com/jqh6rZO.pngg",
    },
  ];

    return (
        <div className={classes.main}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}> 
                    <Typography className={classes.text} variant="h3">Store</Typography>
                </Grid>
                {products.map(product => (
                    <Grid
                    item
                    key={product.name}
                    md={4}
                    sm={6}
                    xs={12}
                >
                    <Cards name={product.name} info={product.info} image={product.image} {...product}/>
                </Grid>
                ))}
                <Grid item xs={12}> 
                    <Typography className={classes.text} variant="h5">{counter}</Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default ShoppingCart;