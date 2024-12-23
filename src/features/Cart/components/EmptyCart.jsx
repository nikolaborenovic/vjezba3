import Button from '../../../components/Button/Button';
import '../cart.style.css'
import EmptyCartImg from '../../../assets/emptyCart.png'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const navigate = useNavigate();
    const handleRedirect = (route) => {
        navigate(route)
    }
    return (
        <div className='emptyCart_wrapper'>
            <div className='emptyCart_holder'>
                <img src={EmptyCartImg}/>
                <p>Your cart is currently empty, if you wish to add items click on button below!</p>
                <Button
                label='SHOP NOW'
                textColor='white'
                backgroundColor='#e74c3c'
                borderRadius='20px'
                handleClick={() => handleRedirect('/offer')}
                />
            </div>
        </div>
    )
}

export default EmptyCart;