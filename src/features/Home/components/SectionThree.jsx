import '../home.style.css'
import SectionThreeImg from '../../../assets/headphonesBlack.png'

const SectionThree = () => {
    return(
        <div className='section_three_holder'>
            <div className='section_three_main'>
                <h1>SHOWCASE APPS, INNOVATIVE TECH OR BUSINESSES</h1>
                <p>Never be without the product you need! Sign up today to save money and time. Cancel anytime.</p>
                <button>ORDER NOW</button>
            </div>
            <div className='section_three_image'>
                <img src={SectionThreeImg}/>
            </div>
        </div>
    )
}

export default SectionThree;