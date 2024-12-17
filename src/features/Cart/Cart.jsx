import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './cart.style.css'
import CartItem from './components/CartItem';
import { useOrderStore } from '../../store/order.store';
import Item from '../Offer/components/Item';

const Cart = () => {
    const {orderList, subtotalPrice, discount, tax, total, clearCart} = useOrderStore();
    const navigate = useNavigate();


    const handleRedirect = (route) => {
        navigate(route)
    }

    if(!orderList.length) {
        return <h2 className='cart_empty'>Cart Is Empty!</h2>
    }

    return(
        <div className='cart_wrapper'>
            <div className='cart_holder'>
                <h3>Cart</h3>
                <div className='cart_added_items'>
                    {orderList.map((item) => (
                        <CartItem
                        key={item.id}
                        title={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        item={item}
                        />
                    ))}
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
                        <p>Subtotal:</p>
                        <div className='calculated_price'>
                            <p>{subtotalPrice}</p>
                            <p>$</p>
                        </div>
                    </div>
                    <div className='cart_calculation_element cart_subtotal'>
                        <p>Discount:</p>
                        <div className='calculated_price'>
                            <p>{discount.toFixed(2)}</p>
                            <p>$</p>
                        </div>
                    </div>
                    <div className='cart_calculation_element cart_subtotal'>
                        <p>Tax:</p>
                        <div className='calculated_price'>
                            <p>{tax.toFixed(2)}</p>
                            <p>$</p>
                        </div>
                    </div>
                </div>
                <div className='cart_total'>
                    <p>Total:</p>
                    <div className='calculated_price'>
                            <p>{total.toFixed(2)}</p>
                            <p>$</p>
                    </div>
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
                    <Button
                    label='Clear cart'
                    backgroundColor='#e74c3c'
                    textColour='white'
                    borderRadius='10px'
                    handleClick={() => clearCart()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart;