import { makeStyles, Theme } from "@material-ui/core/styles";

const useSubtitleStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFamily: "Verdana",
        fontSize: 17,
        color: theme.palette.secondary.dark,
    }
}));

export default useSubtitleStyles;