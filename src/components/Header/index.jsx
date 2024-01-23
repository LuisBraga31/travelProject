import { FaHiking, FaCartPlus, FaSearch, FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

import '../../styles/components/header.sass';
import { useEffect, useState } from "react";

export default function Header() {

    const [background, setBackground] = useState(false);
    const [menu, setMenu] = useState(false);

    const showMenu = () => setMenu(!menu);
    
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
                  <a href="#about"> About </a>
                  <a href="#shop"> Shop </a>
                  <a href="#package"> Packages </a>
                  <a href="#reviews"> Reviews </a>
                  <a href="#blogs"> Blogs </a>
              </nav>
        
              <div className="navbaricons">
                
                <a href="#"> <FaCartPlus size={23} /> </a>
                <a href="#"> <FaSearch size={23} /> </a>
                <a href="#" className="bars"> <FaBars size={23} onClick={showMenu}/> </a>
              </div>

            </div>

            <nav className={menu ? "menuResponsive active" : "menuResponsive"}>
              
              <div className="closeButton">
                <MdOutlineClose size={32} onClick={showMenu}/>
              </div>
              
              <div className="menu-itens">
                <a href="#"> Home </a>
                <a href="#about"> About </a>
                <a href="#shop"> Shop </a>
                <a href="#package"> Packages </a>
                <a href="#reviews"> Reviews </a>
                <a href="#blogs"> Blogs </a>
              </div>
            </nav>


        </header>
    )

}