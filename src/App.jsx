import React from "react";
import {
	Typography,
	AppBar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
} from "@material-ui/core";
import { PhotoCamera, TapAndPlay } from "@material-ui/icons";

import useStyles from "./styles";

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant='h6'>Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth='sm'>
						<Typography variant='h2' align='center' color='textPrimary' gutterBottom>
							Photo Album
						</Typography>
						<Typography variant='h5' align='center' color='textSecondary' paragraph>
							Hello everyone! This is a photo album built with material-ui and react.
						</Typography>
						<div className={classes.button}>
							<Grid container spacing={2} justify='center'>
								<Grid item>
									<Button variant='contained' color='primary'>
										See my photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Secondary Action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth='md'>
					<Grid container spacing={4}>
            {cards.map(() => (
              	<Grid item key={cards} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a card content.  You can use it to describe content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
					</Grid>
				</Container>
			</main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
          Made using React and Material-UI
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          &copy; 2021 David Cho
        </Typography>
      </footer>
		</>
	);
}


export default App;
