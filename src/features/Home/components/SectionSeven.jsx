import '../home.style.css'
import SectionSevenImg from '../../../assets/headphonesWhite.png'
import Button from '../../../components/Button/Button'

const SectionSeven = () => {
    return(
        <div className='section_seven_wrapper'>
            <div className='section_seven_holder'>
                <div className='section_seven_info'>
                    <div className='section_seven_info_title'>
                        <h1>Fresh Beautiful.</h1>
                        <h1>Innovative.</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <Button
                    label='ORDER NOW'
                    />
                </div>
                <img src={SectionSevenImg}/>
            </div>
            <p>© 2024 Company Name. All rights reserved.</p>
        </div>
    )
}

export default SectionSeven;