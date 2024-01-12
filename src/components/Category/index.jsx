import categories from '../../data/categories.json';
import '../../styles/components/category.sass';

export default function Category() {

    return (
        <section id="category">

            <h2> Adventure Ideas! </h2>

            <div className="category-container">

                {categories.map( (item, index) => (
                    <div key={index} className="box">
                        <img src={item.image} alt="" />
                        <h3> {item.title} </h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#"> Read More </a>
                    </div>
                ))}

            </div>
        
        </section>
    )

}