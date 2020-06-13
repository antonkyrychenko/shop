import Axios from 'axios';
import ResponseObject from '../models/common/response-object';
import Order from '../models/order';

export const createOrder = async (order: Order): Promise<ResponseObject<any>> => {
    const response = await Axios.post<ResponseObject<any>>(`https://localhost:44332/api/order`, order);
    
    return response.data;
};