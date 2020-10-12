import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from "react-redux";
import { increment } from "../../redux/actions";

const useStyles = makeStyles({
    main: {
        textAlign: "center",
        margin: "2em",
    },
    text: {
        verticalAlign: "center",
    },
    root: {
        maxWidth: "345px",
        textAlign: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
});

const Cards = props => {
  const classes = useStyles();

  const dispatch = useDispatch();

    return (
        <div className={classes.main}>
            <Card className={classes.root} onClick={() => dispatch(increment())}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={props.name}
                    height="140"
                    image={props.image}
                    title={props.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.info}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};
export default Cards;