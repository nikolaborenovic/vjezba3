import './navigation.style.css'
import LogoImg from '../../assets/logo.png'
import CartImg from '../../assets/edit.png'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <div className='navigation_wrapper'>
        <div className='navigation_holder'>
            <img src={LogoImg} className='logo_img'/>
            <div className='navigation_links'>
                <Link to={{pathname: '/'}}>Pocetna</Link>
                <Link to={{pathname: '/offer'}}>Ponuda</Link>
                <Link to={{pathname: '/how-to'}}>Kako naruciti?</Link>
                <Link to={{pathname: '/about'}}>O nama</Link>
                <Link to={{pathname: '/contact'}}>Kontakt</Link>
            </div>
            <Link to={{pathname: '/cart'}}><img src={CartImg} className='cart_img'></img></Link>
        </div>
        </div>
    )
}

export default Navigation;