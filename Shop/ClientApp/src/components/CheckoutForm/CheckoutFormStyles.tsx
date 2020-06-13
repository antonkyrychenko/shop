import { makeStyles, Theme } from "@material-ui/core/styles";

const useCheckoutFormStyles = makeStyles((theme: Theme) => ({
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
    },
    card: {
        fontSize: 20
    },
    errorMessage: {
        color: "#bf1650"
    }
}));

export default useCheckoutFormStyles;