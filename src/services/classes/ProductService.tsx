import axios from "axios";
import Product from "../../interfaces/IProduct";
import IProductService from "../IProductService";


export default class ProductService implements IProductService {

    product = 'products/'

    async getByCategory(idCategory: string): Promise<Product[]> {
        const response = await axios.get<Product[]>(`${import.meta.env.VITE_API_URL}categories/${idCategory}/products`);
        return response.data
    }

    async getAll(): Promise<Product[]> {
        const response = await axios.get<Product[]>(`${import.meta.env.VITE_API_URL}${this.product}all`);
        return response.data
    }
    async get(id: string): Promise<Product> {
        const response = await axios.get<Product>(`${import.meta.env.VITE_API_URL}${this.product}${id}`);
        return response.data
    }
    async update(): Promise<Product> {
        const response = await axios.get<Product>(`${import.meta.env.VITE_API_URL}${this.product}`);
        return response.data
    }

}