import Axios from 'axios';
import Product from '../models/product';
import ResponseObject from '../models/common/response-object';

export const getProducts = async (): Promise<ResponseObject<Array<Product>>> => {
    const response = await Axios.get<ResponseObject<Array<Product>>>(`https://localhost:44332/api/products`);

    return response.data;
};