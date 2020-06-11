import * as productService from '../services/product.service';

const services = {
    api: {
        productService
    },
};

export default services;

export type Services = typeof services;