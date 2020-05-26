import { post } from '@/config/axiosConfig';

export const login = (param) => post('/baabaa/login', param);

export const register = (param) => post('/baabaa/register', param);

export const getCategoryList = () => post('/baabaa/getCategoryList');

export const getProductByCategory = (param) => post('/baabaa/getProductByCategory', param);

export const getOrderListByUser = (param) => post('/baabaa/getOrderListByUser', param);

export const getRecommendProducts = () => post('/baabaa/getRecommendProducts');

export const getProductDetails = (id) => post('/baabaa/getProductDetails?id='+id);

export const getSkuDetails = (param) => post('/baabaa/getSkuDetails', param);

export const getCartItemsDetails = (param) => post('/baabaa/getCartItemsDetails', param);

export const getAddress = (userId) => post('/baabaa/getAddress?userId=' + userId);

export const addAddress = (address) => post('/baabaa/addAddress', address);

export const pay = (order) => post('/baabaa/pay', order);

export const searchProduct = (param) => post('/baabaa/searchProduct', param);

export const updateOrder = (param) => post('/baabaa/updateOrder', param);