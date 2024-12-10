import '../offer.style.css'
import ExampleImg from '../../../assets/headphones20.webp'

const Item = ({title, description, price, image}) => {
    return(
        <div className='item_holder'>
            <div className='image_container'>
                <img src={image}/>
            </div>
            <div className='item_name_price item_spacing'>
                <p>{title}</p>
                <p>${price}</p>
            </div>
            <p className='item_description item_spacing'>{description}</p>
            <button>Cart Button</button>
        </div>
    )
}

export default Item;