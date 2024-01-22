import { FaPhone, FaEnvelope, FaMap } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import '../../styles/components/footer.sass'

export default function Footer() {

    return (
        <footer className="footer">

            <div className="box-container">

                <div className="box">
                    <h3> Quick Links </h3>
                    <a href="#"> Home </a>
                    <a href="#about"> About </a>
                    <a href="#shop"> Shop </a>
                    <a href="#package"> Packages </a>
                    <a href="#reviews"> Reviews </a>
                    <a href="#blogs"> Blogs </a>
                </div>

                <div className="box">
                    <h3> Extra Links </h3>
                    <a href="#"> My Account </a>
                    <a href="#"> My Order </a>
                    <a href="#"> My Wishlist </a>
                    <a href="#"> Ask Questions </a>
                    <a href="#"> Terms of Use </a>
                    <a href="#"> Privacy Policy </a>
                </div>
                
                <div className="box">
                    <h3> Contact Info </h3>
                    <a href="#"> <FaPhone/> +55 11 99999-3333 </a>
                    <a href="#"> <FaPhone/> +55 35 98888-4444 </a>
                    <a href="#"> <FaEnvelope/> travelcontact@travel.com </a>
                    <a href="#"> <FaMap/> Sao Paulo, Brazil </a>
                </div>
                
                <div className="box">
                    <h3> Follow Us </h3>
                    <a href="#"> <FaFacebook/> Facebook </a>
                    <a href="#"> <FaTwitter/> Twitter </a>
                    <a href="#"> <FaInstagram/> Instagram </a>
                    <a href="#"> <FaLinkedin/> Linkedin </a>
                    <a href="#"> <FaGithub/> GitHub </a>
                </div>

            </div>
            
            <div className="credit">
                Created by <span> Luis Braga Dev </span> | all rights reserved.
            </div>

        </footer>
    )
}