import { FaCircleUser } from "react-icons/fa6";
import { RiMenu4Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";


const Header = () => {



    const toggleMobileMenu = (isOpen) => {
        const mobileMenu = document.getElementsByClassName('mobileMenu')[0];
        const openMenu = document.getElementById('openMenu');
        const closeMenu = document.getElementById('closeMenu');
    
        mobileMenu.classList.toggle('hidden', !isOpen);
        openMenu.classList.toggle('hidden', isOpen);
        closeMenu.classList.toggle('hidden', !isOpen);
    }
    
    // Use it for opening and closing
    const mobileMenuOpenHandler = () => toggleMobileMenu(true);
    const mobileMenuCloseHandler = () => toggleMobileMenu(false);

    return (
        <div className=" z-10 bg-white sticky top-0 container flex items-center justify-between mx-auto pt-5 h-[120px] px-4 lg:px-0">
            <div><h2 className="text-2xl font-bold lg:text-3x;">Recipe Calories</h2></div>
            <div className="justify-between items-center gap-5 lg:flex">
                <nav className="mobileMenu hidden bg-black flex-col lg:justify-evenly gap-10 font-semibold text-lg  text-white px-4 py-5 w-[70%] absolute top-20 left-0 lg:relative lg:text-black lg:bg-white transition-all duration-500 ease-in-out lg:p-0 lg:flex-row lg:w-[100%] lg:top-0 lg:flex">

                    <ul className=" lg:gap-10 lg:flex ">
                        <li className="hover:text-[#0BE58A]"><a href="#home">Home</a></li>
                        <li className="hover:text-[#0BE58A]" ><a href="#recipe">Recipes</a></li>
                        <li className="hover:text-[#0BE58A]"><a href="#">About</a></li>
                        <li className="hover:text-[#0BE58A]"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="lg:flex hidden justify-between items-center gap-4">
                <input type="text" placeholder="Search" className="bg-gray-200 p-2 rounded-full px-3" />
                <FaCircleUser className=" cursor-pointer text-3xl text-[#0BE58A]" />

            </div>

            <RiMenu4Fill onClick={mobileMenuOpenHandler} id="openMenu" className=" lg:hidden block text-[36px] font-semibold cursor-pointer bg-[#0BE58A] p-1" />
            <GrClose id="closeMenu" onClick={mobileMenuCloseHandler} className="cursor-pointer hidden lg:hidden text-[36px] font-semibold bg-[#0BE58A] p-1" />

        </div>
    );
};

export default Header;