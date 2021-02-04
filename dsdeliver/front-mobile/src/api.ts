import axios from 'axios';
const API_URL = 'https://mata-sds2.herokuapp.app';

export const fetchOrders = () => axios(`${API_URL}/orders`);
export const confirmDelivery = (id: number) => axios.put(`${API_URL}/orders/${id}/delivered`);