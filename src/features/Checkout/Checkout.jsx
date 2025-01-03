import { useNavigate } from 'react-router-dom';
import { useOrderStore } from '../../store/order.store'
import Button from '../../components/Button/Button'
import './checkout.style.css'

const Checkout = () => {
    const navigate = useNavigate();
    const {setDialogContent} = useOrderStore();

    //Navigate to another route and set message for order
    const handleRedirect = (route) => {
        navigate(route)
        setDialogContent({isVisible: true, message: 'Your order has been recieved!', severity: 'success'})
    }

    return(
        <div className='checkout_wrapper'>
            <div className='checkout_holder'>
                <div className='checkout_delivery_address_info'>
                    <h3>Delivery Address</h3>
                    <div className='checkout_input_name'>
                        <input type='text' placeholder='*First Name'/>
                        <input type='text' placeholder='*Last Name'/>
                    </div>
                    <div className='checkout_input_address'>
                        <div className='checkout_input_street_address'>
                            <input type='text' placeholder='*Street Address'/>
                            <input type='text' placeholder='*App/Suite/Floor (Optional)'/>
                        </div>
                        <div className='checkout_input_city_state'>
                            <input type='text' placeholder='*City'/>
                            <input type='text' placeholder='*State'/>
                            <input type='text' placeholder='*Zipcode'/>
                        </div>
                    </div>
                    <div className='checkout_billing_checkbox'>
                        <input type='checkbox'/>
                        <span>Use as billing address</span>
                    </div>
                </div>
                <div className='checkout_contact_info'>
                    <h3>Contact info</h3>
                    <div className='checkout_contact_phone_email'>
                        <input type='text' placeholder='*Email'/>
                        <input type='text' placeholder='*Phone'/>
                    </div>
                    <div className='checkout_privacy_notification'>
                        <p className='checkout_privacy_policy'><span>🔒</span>Your privacy is importaint to us. View our privacy policy here. We will only contact you if there is an issue with your order.</p>
                        <p>We will also look for coupons associated with your email and phone number.</p>
                    </div>
                    <div className='checkout_notifications_checkbox'>
                        <input type='checkbox'/>
                        <span>Accept getting order notifications on your phone</span>
                    </div>
                </div>
                <div className='checkout_button'>
                    <Button
                    label='Proceed with the order'
                    textColour='white'
                    backgroundColor='#e74c3c'
                    borderRadius='10px'
                    handleClick={() => handleRedirect('/')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Checkout;