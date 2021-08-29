import axios from "axios"
import { BASE_URL, END_POINTS } from "../../../constants/api"


export const allProducts = () => { 
    return axios.get(`${BASE_URL}${END_POINTS.discountsList}`)
}

export  const fetchProducts = (pageNumber = 1,pageLimit = 5) => { 
    return axios.get(`${BASE_URL}${END_POINTS.discountsList}?_limit=${pageLimit}&_page=${pageNumber}`)
}