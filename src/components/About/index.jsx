import '../../styles/components/about.sass'

export default function About() {

    return (
        <section id="about">
            
            <div className="about-image">
                <img src="/about.jpg" alt="" />
            </div>

            <div className="about-content">
                <h3> Memorable outdoor experiences</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem natus reprehenderit dolores 
                    optio quod corrupti doloremque, deserunt sunt quo fugit adipisci tempora praesentium, eveniet beatae eos 
                    labore eligendi dolor.</p>
                <p className="content-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laudantium deserunt eaque voluptates? 
                    Illo, delectus ab? Optio eaque magni aliquam nobis aperiam quibusdam!</p>
                <a href="#"> Read More </a>
            </div>

        </section>
    )
}