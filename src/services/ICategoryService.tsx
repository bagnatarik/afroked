import Category from "../interfaces/ICategory";

export default interface ICategoryService {
    getAll(): Promise<Category[] | undefined>;
    get(id: string): Promise<Category>;
    update(id: string): Promise<Category>;
}