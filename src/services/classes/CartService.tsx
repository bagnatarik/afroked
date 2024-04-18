import axios from "axios";
import ICart, { CreateOrUpdateCart } from "../../interfaces/ICart";
import ICartService from "../ICartService";

export default class CartService implements ICartService {

    /* token = localStorage.getItem('token')
    userId = localStorage.getItem('user_id') */

    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NjU0MDY5MDk3LCJleHBpcmVzIjoxNzEzNTU5MDA1LjExNjk4NjV9.E1lgLjwjQO_-nsNJHHz27b_fJVSfliRbv-Z56zUqT7A'
    userId = '5654069097'

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async create(createOrUpdateCart: CreateOrUpdateCart[]): Promise<any> {
        try {
            if (this.token && this.userId) {
                return await axios.post(`${import.meta.env.VITE_API_URL}cart/create`, createOrUpdateCart, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                })
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            return await new Promise((resolve) => {
                resolve(err.response);
            });
        }
    }
    async getCart(): Promise<ICart | undefined> {
        if (this.token && this.userId) {
            const response = await axios.get<ICart>(`${import.meta.env.VITE_API_URL}cart/me`, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })
            return response.data
        }
        return undefined
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async deleteCart(productId: string): Promise<any> {
        try {
            if (this.token && this.userId) {
                return await axios.delete(`${import.meta.env.VITE_API_URL}cart/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                })
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            return err.response

        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async validate(cartId: string): Promise<any> {
        if (this.token && this.userId) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const response = await axios.put<any>(`${import.meta.env.VITE_API_URL}cart/validate/${cartId}`, null, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })
            return response.data
        }
        return undefined
    }

}