import '../cart.style.css'
import ExampleImg from '../../../assets/headphones20.webp'

const CartItem = () => {
    return(
        <div className='cart_item_holder'>
            <div className='cart_item_image'>
                <img src={ExampleImg}/>
            </div>
            <div className='cart_item_name_description'>
                <h3>Item name</h3>
                <p>Description</p>
            </div>
            <div className='cart_item_amount'>
                <span className='add_reduce_items'>-</span>
                <span>0</span>
                <span className='add_reduce_items'>+</span>
            </div>
            <p>Price</p>
            <span className='remove_cart_item'>X</span>
        </div>
    )
}

export default CartItem;