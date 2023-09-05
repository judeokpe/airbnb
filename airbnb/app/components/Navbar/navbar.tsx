"use client"
import Container from "../Container";
import Search from "./Search";
import Logo from "./Logo";
import UserMenu from "./userMenu";

const Navbar = () => {
    return ( 
        <div className="z-10 fixed w-full bg-white shadow-sm">
            <div className="border-b-[2px] py-4">
            <Container>
                <div className=" gap-3 mdgap-0 flex flex-row items-center justify-between">
                    <Logo/>
                    <Search />
                    <UserMenu />
                </div>
            </Container>
            </div>
        </div>
     );
}
 
export default Navbar;