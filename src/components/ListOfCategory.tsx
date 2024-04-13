/* import { useEffect, useState } from "react"; */
import ListOfProduct from "./ListOfProduct";
import Category from "../interfaces/ICategory";

export default function ListOfCategory({ className, category }: { className: string, category: Category }) {

    return (
        <>
            <div className={className}>
                {
                    <ListOfProduct key={category.id} className='flex flex-wrap mb-2' categoryId={category.id} />
                }
            </div>
        </>
    )
}