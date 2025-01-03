import './howTo.style.css'
import itemBrowseImg from '../../assets/itemBrowse.png'
import addToCartImg from '../../assets/addToCart.png'
import inspectCartImg from '../../assets/cartCheck.png'
import checkoutHowToImg from '../../assets/checkoutHowTo.png'

const HowTo = () => {
    return(
        <div className='howTo_wrapper'>
            <div className='howTo_holder'>
                <div className='howTo_step'>
                    <div className='howTo_header_left'>Step 1</div>
                    <div className='howTo_step_content'>
                        <img src={itemBrowseImg}/>
                        <div className='howTo_step_instruction'>
                            <h2>Item</h2>
                            <p>Browse and select your item</p>
                        </div>
                    </div>
                </div>
                <div className='howTo_step'>
                    <div className='howTo_header_right'>Step 2</div>
                    <div className='howTo_step_content'>
                        <img src={addToCartImg}/>
                        <div className='howTo_step_instruction'>
                            <h2>Add To Cart</h2>
                            <p>After you select your item add it to cart</p>
                        </div>
                    </div>
                </div>
                <div className='howTo_step'>
                    <div className='howTo_header_left'>Step 3</div>
                    <div className='howTo_step_content'>
                        <img src={inspectCartImg}/>
                        <div className='howTo_step_instruction'>
                            <h2>Cart</h2>
                            <p>Inspect cart, go to checkout or continue shopping</p>
                        </div>
                    </div>
                </div>
                <div className='howTo_step'>
                    <div className='howTo_header_right'>Step 4</div>
                    <div className='howTo_step_content'>
                        <img src={checkoutHowToImg}/>
                        <div className='howTo_step_instruction'>
                            <h2>Checkout</h2>
                            <p>Fill out your information and finalize transaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowTo;