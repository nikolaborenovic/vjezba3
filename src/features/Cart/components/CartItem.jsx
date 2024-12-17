import '../cart.style.css'
import { useOrderStore } from '../../../store/order.store'

const CartItem = ({title, description, totalPrice, image, item, quantity}) => {
    const {removeItemFromCart, increaseItemQuantity, decreaseItemQuantity} = useOrderStore();
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
                <span className='add_reduce_items' onClick={() => decreaseItemQuantity(item.id)}>-</span>
                <span>{quantity}</span>
                <span className='add_reduce_items' onClick={() => increaseItemQuantity(item.id)}>+</span>
            </div>
            <p>{totalPrice}$</p>
            <span className='remove_cart_item' 
            onClick={() => removeItemFromCart(item)}
            >X</span>
        </div>
    )
}

export default CartItem;