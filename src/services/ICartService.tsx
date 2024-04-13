import ICart, { CreateOrUpdateCart } from "../interfaces/ICart"

export default interface ICartService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create(createOrUpdateCart: CreateOrUpdateCart[]): Promise<any>
    getCart(): Promise<ICart | undefined>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteCart(productId: string): Promise<any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validate(cartId: string): Promise<any>
}