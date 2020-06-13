import React, { FC, useEffect } from "react";
import useProductCatalogStyles from "./ProductCatalogPageStyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { getProductsAction } from "../../store/actions/catalog/products.actions";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@material-ui/core";
import { push } from "connected-react-router";
import { Route, Switch } from "react-router";
import OrderPage from "../OrderPage/OrderPage";
import CheckoutPage from "../CheckoutPage/CheckoutPage";

const ProductCatalogPage: FC = () => {
    const catalog = useSelector((state: RootState) => state.catalog)
    const dispatch = useDispatch();

    const classes = useProductCatalogStyles();

    const navigateToOrder = (productId: string) => dispatch(push(`/order/${productId}`));

    useEffect(() => {
        if (catalog.products === null) {
            dispatch(getProductsAction.request());
        }
    }, []);

    const media = (image: string) =>
        <CardMedia className={classes.media} image={image} title="Product image" />

    const content = (productName: string, productDescription: string) =>
        <CardContent>
            <Typography className={classes.productName} variant="body1" component="p">
                {productName}
            </Typography>
            <Typography className={classes.productDescription} variant="body2" color="textSecondary" component="p">
                {productDescription}
            </Typography>
        </CardContent>

    const price = (unitAmount: number) =>
        <p className={classes.productPrice}>{`${unitAmount / 100}$`}</p>

    function GetProducts() {
        const products = catalog.products && catalog.products.map(product =>
            <Grid style={{ position: "relative" }} key={product.productId} item xs={2}>
                <Card className={classes.product}>
                    <CardActionArea>
                        {media(product.image)}
                        {content(product.name, product.description)}
                    </CardActionArea>
                    <CardActions>
                        {price(product.unitAmount)}
                        <Button onClick={() => navigateToOrder(product.productId)} style={{ marginRight: 15, marginLeft: "auto" }} size="large" variant="contained" color="primary"> Buy </Button>
                    </CardActions>
                </Card>
            </Grid>
        );

        return products;
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {GetProducts()}
            </Grid>
            <Switch>
                <Route path={'/order/:productId'} exact component={OrderPage} />
                <Route path={'/checkout'} exact component={CheckoutPage} />
            </Switch>
        </div>
    );
}

export default ProductCatalogPage;