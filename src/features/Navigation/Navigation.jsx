import './navigation.style.css'
import LogoImg from '../../assets/logo.png'
import CartImg from '../../assets/edit.png'
import { Link } from 'react-router-dom'
import { useOrderStore } from '../../store/order.store'

const Navigation = () => {

    const {orderList} = useOrderStore();

    return(
        <div className='navigation_wrapper'>
        <div className='navigation_holder'>
            <img src={LogoImg} className='logo_img'/>
            <div className='navigation_links'>
                <Link to={{pathname: '/'}}>Home</Link>
                <Link to={{pathname: '/offer'}}>Offers</Link>
                <Link to={{pathname: '/how-to'}}>How to order</Link>
                <Link to={{pathname: '/about'}}>About</Link>
                <Link to={{pathname: '/contact'}}>Contact</Link>
            </div>
            <Link to={{pathname: '/cart'}}>
                <div className='navigation_cart'>
                    <span>{orderList.length ? orderList.length : 0}</span>
                    <img src={CartImg} className='cart_img'/>
                </div>
            </Link>
        </div>
        </div>
    )
}

export default Navigation;