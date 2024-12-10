import '../home.style.css'
import UserReviewImg from '../../../assets/user.jpg'

const SectionSix = () => {
    return(
        <div className='section_six_holder'>
            <h2>What Our Clients Say</h2>
            <div className='review_card_holder'>
                <div className='review_card'>
                    <img src={UserReviewImg}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='user_name'>John Smith</p>
                </div>
                <div className='review_card'>
                    <img src={UserReviewImg}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='user_name'>John Smith</p>
                </div>
                <div className='review_card'>
                    <img src={UserReviewImg}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='user_name'>John Smith</p>
                </div>
            </div>
        </div>
    )
}

export default SectionSix;