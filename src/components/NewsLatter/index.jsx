import '../../styles/components/newslatter.sass'

export default function NewsLatter() {

    return (
        <section id="newslatter">
            
            <div className="newslatter-container">
                <h2 className="heading"> Subscribe Now </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui vitae nobis, 
                    mollitia vel eaque dolor doloremque dolore harum est? </p>
                <form action="">
                    <input type="email" placeholder="Enter your Email" className="email" />
                    <input type="submit" value="Subscribe" className="btn" />
                </form>
            </div>

        </section>
    )

}