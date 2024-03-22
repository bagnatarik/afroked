import Button from "../Button/Button";
import ItemMenu from "../ItemMenu/ItemMenu";

export default function NavbarMenu({ className }: { className: string }) {
    return (
        <>
            <ul className={className}>
                <ItemMenu isDropdown={false} className="text-white text-sm mx-10 group text-center flex" text="home" />
                <ItemMenu isDropdown={true} className="text-white text-sm mx-10 group text-center flex" text="products" />
                <ItemMenu isDropdown={false} className="text-white text-sm mx-10 group text-center flex" text="about" />
                <ItemMenu isDropdown={false} className="text-white text-sm mx-10 group text-center flex" text="fqa" />
                <Button className="text-center w-[14.063rem] h-[3.063rem] rounded-[11px] text-[#00356B] bg-white hover:text-white hover:bg-transparent border border-white transition-all duration-300" text="S'inscrire" />
            </ul>
        </>
    )
}