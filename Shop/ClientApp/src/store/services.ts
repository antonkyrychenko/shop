import * as productService from '../services/product.service';
import * as paymentIntentService from '../services/payment-intent.service';
import * as orderService from '../services/order.service';

const services = {
    api: {
        productService,
        paymentIntentService: paymentIntentService,
        orderService
    },
};

export default services;

export type Services = typeof services;