import persons from '../../data/reviews.json'
import '../../styles/components/reviews.sass'

export default function Reviews() {

    return (
        <section id="reviews">
            
            <h1 className="heading"> Clients Reviews </h1>

            <div className="review-container">

                {persons.map((item, index) => (   
                    <div className="slide" key={index}>
                        <p className="text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque libero inventore assumenda 
                            ab ipsum. Cumque tempore maiores impedit molestiae eligendi beatae sunt saepe facere, tenetur 
                            quos quis, eius asperiores. Ratione. </p>
                        <div className="user">
                            <img src={item.image} alt="" />
                            <div className="info">
                                <h3> {item.name} </h3>
                                <span> {item.work} </span>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
            

        </section>
    )

}