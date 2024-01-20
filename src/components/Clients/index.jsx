import Logo01 from '../../assets/logos/logo-01.jpg'
import Logo02 from '../../assets/logos/logo-02.jpg'
import Logo03 from '../../assets/logos/logo-03.jpg'

import '../../styles/components/clients.sass'

export default function Clients() {

    return (
        <section id="clients">

            <div className="clients-container">
                <img src={Logo01} alt="" />
                <img src={Logo02} alt="" />
                <img src={Logo03} alt="" />
            </div>

        </section>
    )

}