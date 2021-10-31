import axios from "axios";
import { store } from "./store";

const BASE_URL = "https://mcommerce-backend.herokuapp.com//api/";
const TOKEN = store.getState().user.accessToken

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})

