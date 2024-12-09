import '../home.style.css'
import HomeImg from '../../../assets/headphonesWhite.png'
import BussinesImgOne from '../../../assets/img1.png'
import BussinesImgTwo from '../../../assets/img2.png'
import BussinesImgThree from '../../../assets/img3.png'
import BussinesImgFour from '../../../assets/img4.png'
import BussinesImgFive from '../../../assets/img5.jpeg'
import BussinesImgSix from '../../../assets/img6.png'


const SectionOne = () => {
    return(
        <div className='section_one_holder'>
            <div className='section_one_main'>
                <div className='section_one_text'>
                    <div>
                        <h1>Fresh Beautiful.</h1>
                        <h1>Innovative.</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <button>ORDER NOW</button>
                </div>
                <img src={HomeImg}/>
            </div>
            <div className='section_one_footer'>
                <img src={BussinesImgOne}/>
                <img src={BussinesImgTwo}/>
                <img src={BussinesImgThree}/>
                <img src={BussinesImgFour}/>
                <img src={BussinesImgFive}/>
                <img src={BussinesImgSix}/>
            </div>
        </div>
    )
}

export default SectionOne;