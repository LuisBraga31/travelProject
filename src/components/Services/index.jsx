import servicesItens from '../../data/services.json'
import '../../styles/components/services.sass'

export default function Services() {

    return (
        <section id="services">

            <h2 className="heading"> What We Offer </h2>

            <div className="box-container">

                {servicesItens.map((item, index) => (
                    <div className="box" key={index}>
                        <img src={item.image} alt="" />
                        <h3> {item.title} </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis?</p>
                        <a href="#"> Read More </a>
                    </div>
                ))}

            </div>

        </section>
    )
}