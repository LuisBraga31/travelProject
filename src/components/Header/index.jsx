import { FaHiking, FaCartPlus, FaSearch } from "react-icons/fa";
import '../../styles/components/header.sass';

export default function Header() {

    return (
        <header>
        
            <a href="#" className="logo"><FaHiking /> Travel. </a>

            <nav className="navbar">
                <a href=""> Home </a>
                <a href=""> About </a>
                <a href=""> Shop </a>
                <a href=""> Packages </a>
                <a href=""> Reviews </a>
                <a href=""> Blogs </a>
                <a href=""> <FaCartPlus size={20} /> </a>
                <a href=""> <FaSearch size={20} /> </a>
            </nav>
        
        </header>
    )

}