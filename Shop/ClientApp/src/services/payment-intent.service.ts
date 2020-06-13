import Axios from 'axios';
import ResponseObject from '../models/common/response-object';

export const createPaymentIntent = async (productId: string, successUrl: string, cancelUrl: string): Promise<ResponseObject<string>> => {
    const response = await Axios.post<ResponseObject<string>>(`https://localhost:44332/api/paymentIntent`, null, { params: { productId, successUrl, cancelUrl } });
    
    return response.data;
};