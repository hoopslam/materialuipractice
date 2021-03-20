import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import useStyles from "../styles";

const PhotoCard = ({ photoTitle }) => {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cardMedia}
					image='https://source.unsplash.com/random'
					title={photoTitle}
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant='h5'>
						{photoTitle}
					</Typography>
					<Typography>
						This is a card content. You can use it to describe content
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' color='primary'>
						View
					</Button>
					<Button size='small' color='primary'>
						Edit
					</Button>
				</CardActions>
			</Card>
			;
		</>
	);
};

export default PhotoCard;
