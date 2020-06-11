import { makeStyles } from "@material-ui/core/styles";

const useProductCatalogStyles = makeStyles(() => ({
    root: {
        padding: 15
    },
    product: {
        maxWidth: 445,
        height: 480 
    },
    media: {
        height: 240,
    },
    productName: {
        height: 55,
        overflow: "hidden",
        display: "-webkit-box",  
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    productDescription: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 4,
        "-webkit-box-orient": "vertical",
    },
    productPrice: {
        fontSize: 17,
        marginLeft: 20
    }
}));

export default useProductCatalogStyles;