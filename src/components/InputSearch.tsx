import { toast } from "sonner";
import Icon from "../interfaces/Icon";
import IProductService from "../services/IProductService";
import ProductService from "../services/classes/ProductService";

export interface State {
    value: string
}

export default function InputSearch({ className, formClassName, inputClassName, buttonClassName, icon, placeholder, setState, state, setProducts }: { className: string, formClassName: string, inputClassName: string, buttonClassName: string, icon: Icon, placeholder: string, state: State | undefined, setState: CallableFunction, setProducts: CallableFunction }) {
    const productService: IProductService = new ProductService()
    const search = async () => {
        try {
            if (state) {
                const response = await productService.search(state!.value)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setProducts(response)
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.response.detail)
        }

    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const change = (event: any) => {

        if (event.target.value.length === 0) {
            setState(undefined)
            setProducts(undefined)
        } else {
            setState({ value: event.target.value })
        }

    }

    return (
        <>
            <div className={className}>
                <form className={formClassName}>
                    <input onChange={change} value={state?.value} placeholder={placeholder} className={inputClassName} type="text" />
                    <button onClick={search} className={buttonClassName} type="button">
                        {icon.icon}
                    </button>
                </form>
            </div>
        </>
    )
}