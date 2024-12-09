import '../home.style.css'
import CardImg from '../../../assets/user.png'

const SectionTwo = () => {
    return(
        <div className='section_two_holder'>
            <div className='section_two_main'>
                <h1>Beautiful presentations made easy.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='section_two_cards'>
                <div className='card'>
                    <img src={CardImg}/>
                    <h1>FREE UPDATES</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='card'>
                    <img src={CardImg}/>
                    <h1>EASY TO USE</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='card'>
                    <img src={CardImg}/>
                    <h1>TRENDY DESIGN</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;