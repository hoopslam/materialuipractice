import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({  //optional theme prop to access default theme
	//making a hook called useStyles
	container: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	icon: {
		marginRight: "20px",
	},
	buttons: { marginTop: "40px" },
    cardGrid: {
        padding: "20px 0",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        padding: "50px 0",
    }
})); // returns object containing all the custom styles

export default useStyles;
