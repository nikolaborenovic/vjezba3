import '../offer.style.css'
import Button from '../../../components/Button/Button'

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
            <Button
            label='Add to Cart'
            />
        </div>
    )
}

export default Item;