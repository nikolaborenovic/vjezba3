import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './cart.style.css'
import CartItem from './components/CartItem';
import { useOrderStore } from '../../store/order.store';

const Cart = () => {
    const {orderList} = useOrderStore();
    console.log (orderList, 'order list')
    const navigate = useNavigate();
    const handleRedirect = (route) => {
        navigate(route)
    }

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
                    <Button
                    label='Apply'
                    textColour='white'
                    backgroundColor='#e74c3c'
                    borderRadius='5px'
                    />
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
                    <Button
                    label='Proceed to checkout'
                    backgroundColor='#e74c3c'
                    textColour='white'
                    borderRadius='10px'
                    handleClick={() => handleRedirect('/checkout')}
                    />
                    <Button
                    label='Continue shopping'
                    backgroundColor='#e74c3c'
                    textColour='white'
                    borderRadius='10px'
                    handleClick={() => handleRedirect('/offer')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart;