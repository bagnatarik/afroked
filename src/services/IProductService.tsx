import Product from "../interfaces/IProduct";

export default interface IProductService {
    getAll(): Promise<Product[]>;
    get(id: string): Promise<Product>;
    getByCategory(idCategory: string): Promise<Product[]>;
    update(id: string): Promise<Product>;
}