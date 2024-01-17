import '../../styles/components/package.sass'
import packages from '../../data/packages.json'

export default function Package() {

    return (
        <section id="package">
        
            <h2 className="heading"> Popular Packages </h2>

            <div className="package-container">

                {packages.map( (item, index) => (
                    <div className="box" key={index}>

                        <div className="image">
                            <img src={item.image} alt="#" />
                        </div>

                        <div className="content">
                            <h3> Featured Tour Package </h3>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, obcaecati.</p>
                            <span className="price"> $250 - $450</span>
                            <a href="#" className="btn"> Explore Now </a>
                        </div>

                    </div>
                ))}
                
            </div>
        
        </section>
    )

}