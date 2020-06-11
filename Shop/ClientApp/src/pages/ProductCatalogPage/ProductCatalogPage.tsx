import React, { FC, useState, useEffect } from "react";
import useProductCatalogStyles from "./ProductCatalogPageStyles";
import Product from "../../models/product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { getProductsAction } from "../../store/actions/catalog/products.actions";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@material-ui/core";

type Props =
    & {}

const ProductCatalogPage: FC<Props> = (props) => {
    const catalog = useSelector((state: RootState) => state.catalog)
    const dispatch = useDispatch();

    const classes = useProductCatalogStyles();

    useEffect(() => {
        if (catalog.products === null) {
            dispatch(getProductsAction.request());
        }
    }, []);

    function GetProducts() {
        const products = catalog.products && catalog.products.map(product =>
            <Grid style={{ position: "relative" }} key={product.productId} item xs={2}>
                <Card className={classes.product}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={product.image}
                            title="Product image"
                        />
                        <CardContent>
                            <Typography className={classes.productName} variant="body1" component="p">
                                {product.name}
                            </Typography>
                            <Typography className={classes.productDescription} variant="body2" color="textSecondary" component="p">
                                {product.description}
                            </Typography>
                        </CardContent>


                    </CardActionArea>
                    <CardActions>
                        <p className={classes.productPrice}>{`${product.price}$`}</p>
                        <Button style={{ marginRight: 15, marginLeft: "auto" }} size="large" variant="contained" color="primary"> Buy </Button>
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
        </div>
    );
}

export default ProductCatalogPage;