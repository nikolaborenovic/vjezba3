import './cart.style.css'
import CartItem from './components/CartItem';

const Cart = () => {
    return(
        <div className='cart_wrapper'>
            <div className='cart_holder'>
                <h3>Cart</h3>
                <div className='cart_added_items'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className='cart_promo_input'>
                    <input type='text' placeholder='Promocode'/>
                    <button>Apply</button>
                </div>
                <p className='discount_amount'>20% off discount</p>
                <div className='cart_calculation'>
                    <div className='cart_calculation_element'>
                        <p>Subtotal</p>
                        <p>$</p>
                    </div>
                    <div className='cart_calculation_element cart_subtotal'>
                        <p>Discount</p>
                        <p>$</p>
                    </div>
                    <div className='cart_calculation_element cart_subtotal'>
                        <p>Tax</p>
                        <p>$</p>
                    </div>
                </div>
                <div className='cart_total'>
                    <p>Total</p>
                    <p>$</p>
                </div>
                <div className='cart_buttons'>
                    <button>Proceed to checkout</button>
                    <button>Continue shopping</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;