import { makeStyles, Theme } from "@material-ui/core/styles";

const useOrderStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFamily: "Verdana",
    },
    drawerPaper: {
        width: "400px",
        padding: "10px 20px"
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: 500,
        color: theme.palette.primary.dark,
    },
    subtitle: {
        fontSize: 20,
    },
    inputSection: {
        '& > *': {
            marginBottom: 10
        }
    }
}));

export default useOrderStyles;