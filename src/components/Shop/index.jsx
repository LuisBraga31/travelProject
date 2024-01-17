import { FaShoppingCart, FaEye, FaShare, FaStarHalf, FaStar} from "react-icons/fa";

import shopItens from '../../data/shop.json'
import '../../styles/components/shop.sass'

export default function Shop() {
    
    return (
        <section id="shop">
        
            <h2 className="heading"> Featured Products </h2>

            <div className="shop-products">

                {shopItens?.map((item, index) => (
                    <div key={index} className="shop-item">
                        
                        <div className="image">
                            <img src={item.image} alt="" />
                            <div className="icons">
                                <FaShoppingCart />
                                <FaEye />
                                <FaShare />
                            </div>
                        </div>
                        
                        <div className="content">
                            <h3> Survival Kits </h3>
                            <span> {item.price} </span>
                            <div className="stars">
                                <FaStar size={16}/>
                                <FaStar size={16}/>
                                <FaStar size={16}/>
                                <FaStar size={16}/>
                                <FaStarHalf size={16}/>
                            </div>
                        </div>
                        
                    </div>
                ))}

            </div>

        </section>
    )
}