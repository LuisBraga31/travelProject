import { FaCalendar, FaUser } from "react-icons/fa";

import '../../styles/components/blogs.sass'
import blogs from '../../data/blogs.json'

export default function Blogs() {

    return (
        <section id="blogs">
            
            <h2 className="heading"> Our Daily Posts </h2>

            <div className="blogs-container">

                {blogs.map((item, index) => (

                    <div key={index} className="slide" >
                        <img src={item.image} alt="" />
                        <div className="icons">
                            <a href=""> <FaCalendar/> {item.date} </a>
                            <a href=""> <FaUser/> By {item.person} </a>
                        </div>
                        <h3> Blog Title </h3>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ipsum vel ut. </p>
                        <a href="#" className="btn"> Read More</a>
                    </div>

                ))}

            </div>

        </section>
    )


}