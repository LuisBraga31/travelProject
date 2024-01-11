import categories from '../../data/categories.json';

export default function Category() {

    return (
        <section>

            <div>

                {categories.map( (item, index) => (
                    <div key={index}>
                        <img src={item.image} alt="" />
                        <h3> {item.title} </h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#" className="btn"> Veja mais </a>
                    </div>
                ))}

            </div>
        
        </section>
    )

}