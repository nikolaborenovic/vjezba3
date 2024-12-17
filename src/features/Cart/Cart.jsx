import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './cart.style.css'
import CartItem from './components/CartItem';
import { useOrderStore } from '../../store/order.store';
import Item from '../Offer/components/Item';
import { useState } from 'react';
import { findDiscountbyCode } from '../../data/discounts';

const Cart = () => {
    const {orderList, clearCart} = useOrderStore();
    const navigate = useNavigate();
    const [discount, setDiscount] = useState(null)
    const [discountCode, setDiscountCode] = useState('');

    const total = orderList.reduce((acc, order) => acc + order.price * order.quantity, 0);
    const calculateDiscountValue = () => {
        if(!discount) return 0;
        return(total * discount.value) / 100
    } 
    const discountValue = calculateDiscountValue();
    const taxRate = (total - discountValue) * 0.1;
    const totalAfterDiscountAndTax = total - discountValue + taxRate;
    
    const handleDiscountApply = () => {
        const discount = findDiscountbyCode(discountCode)
        if (discount) {
            setDiscount(discount)
        } else {
            alert('Invalid discount code')
            setDiscount(null)
        }
    }

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
                        totalPrice={item.totalPrice}
                        image={item.image}
                        item={item}
                        quantity={item.quantity}
                        />
                    ))}
                </div>
                <div className='cart_promo_input'>
                    <input type='text' placeholder='Promocode' onChange={(e) => setDiscountCode(e.target.value)}/>
                    <Button
                    label='Apply'
                    textColour='white'
                    backgroundColor='#e74c3c'
                    borderRadius='5px'
                    handleClick={() => handleDiscountApply()}
                    />
                </div>
                <p className='discount_amount'>{discount && `Applied discount: ${discount.value}% off`}</p>
                <div className='cart_calculation'>
                    <div className='cart_calculation_element'>
                        <p>Subtotal:</p>
                        <div className='calculated_price'>
                            <p>{total.toFixed(2)}</p>
                            <p>$</p>
                        </div>
                    </div>
                    <div className='cart_calculation_element cart_subtotal'>
                        <p>Discount:</p>
                        <div className='calculated_price'>
                            <p>{discountValue.toFixed(2)}</p>
                            <p>$</p>
                        </div>
                    </div>
                    <div className='cart_calculation_element cart_subtotal'>
                        <p>Tax:</p>
                        <div className='calculated_price'>
                            <p>{taxRate.toFixed(2)}</p>
                            <p>$</p>
                        </div>
                    </div>
                </div>
                <div className='cart_total'>
                    <p>Total:</p>
                    <div className='calculated_price'>
                            <p>{totalAfterDiscountAndTax.toFixed(2)}</p>
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