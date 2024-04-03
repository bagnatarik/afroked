import axios from "axios";
import Category from "../../interfaces/ICategory";
import ICategoryService from "../ICategoryService";

export default class CategoryService implements ICategoryService {
    category = 'categories/'
    async getAll(): Promise<Category[] | undefined> {
        const response = await axios.get<Category[]>(`${import.meta.env.VITE_API_URL}${this.category}all`);
        return response.data ? response.data : undefined
    }
    async get(id: string): Promise<Category> {
        const response = await axios.get<Category>(`${import.meta.env.VITE_API_URL}${this.category}${id}`);
        return response.data
    }
    async update(): Promise<Category> {
        const response = await axios.get<Category>(`${import.meta.env.VITE_API_URL}${this.category}`);
        return response.data
    }

}