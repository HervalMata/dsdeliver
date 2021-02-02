import axios from "axios";
import { OrderPayload } from "./types";

const API_URL = 'http://localhost:8080';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
  return axios(`${API_URL}/products`)
}

export const fetchLocalMapBox = (local: string) =>
  axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken})`)

export const saveOrder = (payload: OrderPayload) => axios.post(`${API_URL}/orders`, payload);