import { useEffect, useState } from "react";
import ListOfProduct from "./ListOfProduct";
import Category from "../interfaces/ICategory";
import Loading from "./Loading";
import ICategoryService from "../services/ICategoryService";
import CategoryService from "../services/classes/CategoryService";

export default function ListOfCategory({ className }: { className: string }) {
    const [categories, setCategories] = useState<Category[] | undefined>(undefined)
    const categoryService: ICategoryService = new CategoryService()

    const fetch = async () => {
        const response = await categoryService.getAll()
        if (response) {
            setCategories(response)
        }
    }

    useEffect(() => {
        fetch()
    })

    return (
        <>
            <div className={className}>
                {
                    categories !== undefined ? (
                        categories?.map((data) => (
                            <>
                                <ListOfProduct key={data.id} className='flex overflow-x-auto mb-2' categoryId={data.id} categoryName={data.name} />
                            </>
                        ))
                    ) : (
                        <Loading className='w-full h-screen flex items-center justify-center' />
                    )
                }
            </div>
        </>
    )
}