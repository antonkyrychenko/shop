import { makeStyles, Theme } from "@material-ui/core/styles";

const useTitleStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFamily: "Verdana",
        textAlign: "center",
        fontSize: 35,
        color: theme.palette.primary.dark,
    }
}));

export default useTitleStyles;