import NavbarMenu from "../NavbarMenu/NavbarMenu";

export default function Navbar() {
    return (
        <>
            <nav className="flex items-center px-5 py-7 w-full">
                <p className='uppercase font-extrabold text-xl text-white grow'>afroked</p>
                <NavbarMenu className="flex justify-between items-center uppercase" />
            </nav>
        </>
    )
}