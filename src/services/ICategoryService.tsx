import Category from "../interfaces/ICategory";
import Product from "../interfaces/IProduct";

export default interface ICategoryService {
    getAll(): Promise<Category[] | undefined>;
    getAllProductByCategoryId(categoryId: string): Promise<Product[] | undefined>;
    get(id: string): Promise<Category>;
    update(id: string): Promise<Category>;

}