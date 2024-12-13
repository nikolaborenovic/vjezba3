import '../home.style.css'
import CardImg from '../../../assets/cardHeadphones.webp'
import Button from '../../../components/Button/Button'

const SectionFour = ({handleRedirect}) => {
    return(
        <div className='section_four_holder'>
            <h3>Our Packages</h3>
            <div className='section_four_card_holder'>
                <div className='section_four_card'>
                    <img src={CardImg}/>
                    <h5>Simple</h5>
                    <p>Security Device with Monthly Service</p>
                    <p className='section_four_price'>19$</p>
                    <Button
                    label='SHOP NOW'
                    textColor='white'
                    backgroundColor='#e74c3c'
                    handleClick={() => handleRedirect('/offer')}
                    />
                </div>
                <div className='section_four_card'>
                    <img src={CardImg}/>
                    <h5>Standard</h5>
                    <p>Security Device with Monthly Service</p>
                    <p className='section_four_price'>29$</p>
                    <Button
                    label='SHOP NOW'
                    textColor='white'
                    backgroundColor='#e74c3c'
                    handleClick={() => handleRedirect('/offer')}
                    />
                </div>
                <div className='section_four_card'>
                    <img src={CardImg}/>
                    <h5>Best Offer</h5>
                    <p>Security Device with Monthly Service</p>
                    <p className='section_four_price'>39$</p>
                    <Button
                    label='SHOP NOW'
                    textColor='white'
                    backgroundColor='#e74c3c'
                    handleClick={() => handleRedirect('/offer')}
                    />
                </div>
            </div>
        </div>
    )
}

export default SectionFour;