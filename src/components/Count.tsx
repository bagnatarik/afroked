import { useState } from "react"
import Icon from "../interfaces/Icon"
import Button from "./Button"

export default function Count({ className, count, setCount, icons }: { className: string, count: number | undefined, setCount: CallableFunction | undefined, icons: Icon[] }) {
    if (setCount == undefined) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [countInCount, setCountInCount] = useState(count)
        const plus = () => {
            countInCount && setCountInCount((countInCount: number | undefined) => countInCount! + 1)
        }

        const minus = () => {
            countInCount && setCountInCount((countInCount: number | undefined) => countInCount! - 1 <= 0 ? 1 : countInCount! - 1)
        }

        return (
            <>
                <div className={className}>
                    <Button link={undefined} onclick={minus} className='' icon={icons[0]} text={undefined} />
                    <p>{countInCount}</p>
                    <Button link={undefined} onclick={plus} className='' icon={icons[1]} text={undefined} />
                </div>
            </>
        )
    }

    const plus = () => {
        setCount((count: number) => count + 1)
    }

    const minus = () => {
        setCount((count: number) => count - 1 <= 0 ? 1 : count - 1)
    }

    return (
        <>
            <div className={className}>
                <Button link={undefined} onclick={minus} className='' icon={icons[0]} text={undefined} />
                <p>{count}</p>
                <Button link={undefined} onclick={plus} className='' icon={icons[1]} text={undefined} />
            </div>
        </>
    )
}