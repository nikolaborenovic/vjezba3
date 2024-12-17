import '../cart.style.css'
import { useOrderStore } from '../../../store/order.store'

const CartItem = ({title, description, price, image, item, handleAdd}) => {
    const {removeItemFromCart} = useOrderStore();
    return(
        <div className='cart_item_holder'>
            <div className='cart_item_image'>
                <img src={image}/>
            </div>
            <div className='cart_item_name_description'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='cart_item_amount'>
                <span className='add_reduce_items'>-</span>
                <span>0</span>
                <span className='add_reduce_items'>+</span>
            </div>
            <p>{price}$</p>
            <span className='remove_cart_item' 
            onClick={() => removeItemFromCart(item)}
            >X</span>
        </div>
    )
}

export default CartItem;