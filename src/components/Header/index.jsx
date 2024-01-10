import { FaHiking, FaCartPlus, FaSearch, FaBars } from "react-icons/fa";
import '../../styles/components/header.sass';
import { useEffect, useState } from "react";

export default function Header() {

    const [background, setBackground] = useState(false);
    
    useEffect(() => {
        
        const handleScroll = () => {

          if (window.scrollY > 0) {
            setBackground(true);
          } else {
            setBackground(false);
          }
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []);

    return (
        <header className={`${background ? 'header-active' : ''}`}>
        
            <a href="#" className="logo"><FaHiking /> Travel. </a>

            <div className="header-nav">
              
              <nav className="navbar">
                  <a href="#"> Home </a>
                  <a href="#"> About </a>
                  <a href="#"> Shop </a>
                  <a href="#"> Packages </a>
                  <a href="#"> Reviews </a>
                  <a href="#"> Blogs </a>
              </nav>
        
              <div className="navbaricons">
                <a href="#"> <FaBars size={23}/> </a>
                <a href="#"> <FaCartPlus size={23} /> </a>
                <a href="#"> <FaSearch size={23} /> </a>
              </div>

            </div>


        </header>
    )

}