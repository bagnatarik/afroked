export default interface ICart {
    cart_id: string,
    data: ICartData[],
    total_price: 13000,
    total_items: 1
}

interface ICartData {
    product_id: string,
    product_name: string,
    product_image: string,
    product_stock: number,
    quantity: number,
    unit_price: number,
    total_unit: number
}

export interface CreateOrUpdateCart {
    product_id: string,
    quantity: number
}