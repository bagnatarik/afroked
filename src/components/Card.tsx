import { useNavigate } from "react-router-dom"

export default function Card({ className, children, productId }: { className: string, children: React.ReactNode, productId: string | undefined }) {
    const navigate = useNavigate()

    const goTo = (productId: string) => {
        navigate(`detail/${productId}`)
    }

    return (
        <>
            <div onClick={() => {
                if (productId) {
                    goTo(productId)
                }
            }} className={className}>
                {children}
            </div>
        </>
    )
}