import IPrice from "../interfaces/IPrice";


export default function Price({ className, price }: { className: string, price: IPrice }) {
    return (
        <>
            {
                price.newPrice ? (
                    <>
                        <div className={className}>
                            <p>
                                {price.newPrice} {price.currency}
                            </p>
                            <p className={price.className}>
                                {price.price} {price.currency}
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <p className={className}>
                            {price.price} {price.currency}
                        </p>
                    </>
                )
            }
        </>
    )
}