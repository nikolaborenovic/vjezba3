import './about.style.css'
import AboutImg from '../../assets/about.jpg'

const About = () => {
    return(
        <div className='about_holder'>
            <div className='background'>
                <div className='about_segment'>
                    <div className='about_segment_text'>
                        <h3 className='about_title'>About Us</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <img src={AboutImg}/>
                </div>
            </div>
            <div className='about_segment'>
                <img src={AboutImg}/>
                <div className='about_segment_text'>
                    <h3>Our Mission: Helping Millions of Organizations Grow Better</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
            <div className='about_segment'>
                <div className='about_segment_text'>
                    <h3>Our Story</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <img src={AboutImg}/>
            </div>
        </div>
    )
}

export default About;